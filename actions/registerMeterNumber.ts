'use server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

interface MeterData {
    meterName: string;
    meterNumber: string;
}

interface MeterDataResult {
    data?: MeterData;
    error?: string;
}

async function addMeterNumber(formData: FormData): Promise<MeterDataResult> {
    const nameValue = formData.get('meterName');
    const numberValue = formData.get('meterNumber');
    console.log('name', nameValue, 'number', numberValue);
    

    // validate value
    if (!nameValue || nameValue === '' || !numberValue || numberValue === '') {
        return {error: 'Name and Meter number are missing'}
    }

    const meterName: string = nameValue.toString();
    const meterNumber: string = numberValue.toString();

    // check for user
    const { userId } = auth();

    if (!userId) {
        return {error: 'No user found.'}
    }

    try {
        const meterData: MeterData = await db.meter.create({
            data: {
                meterName,
                meterNumber,
                userId,
            },
        })

        revalidatePath('/');

        return { data: meterData };
    } catch (error) {
        return {error: 'Database error'}
    }
}

export default addMeterNumber;
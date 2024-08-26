'use server';

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

interface TokenData {
    amount: number;
    meterNumber: string;
}

interface TokenReturnData {
    data?: TokenData;
    error?: string;
}

async function buyToken(formData: FormData): Promise<TokenReturnData> {

    const amountValue = formData.get('amount');
    const meterIdValue = formData.get('meterNumber');
    console.log('amount', amountValue, 'meter', meterIdValue);
    

    if (!amountValue || !meterIdValue || meterIdValue === '') {
        return { error: 'Amount and Meter Number must be provided' };
    }

    const amount: number = parseFloat(amountValue.toString());
    const meterNumber: string = meterIdValue.toString();

    const { userId } = auth();

    if (!userId) {
        return { error: 'Not not found' };
    }

    try {
        const tokenData: TokenData = await db.token.create({
            data: {
                amount,
                meterNumber,
            }
        });

        return { data: tokenData };
    } catch (error) {
        return { error: 'Database error' };
    }
    
}

export default buyToken;
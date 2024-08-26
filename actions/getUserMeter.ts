import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { Meter } from "@/types/Meter";


async function getUserMeter(): Promise<{
    meters?: Meter[];
    error?: string;
}> {
    const {userId} = auth();

    // check for userId 
    if (!userId) {
        return { error: "No user found" };
    }

    try {
        const meters = await db.meter.findMany({
            where: { userId },
            orderBy: {
                createdAt: 'desc',
            },
        })

        return { meters };
    } catch (error) {                
        return { error: "Database error" };
    }
}

export default getUserMeter;

import { Tokens } from "./Tokens";
export interface Meter {
    id: string;
    userId: string;
    meterName: string;
    meterNumber: string;
    createdAt: Date;
    tokens?: Tokens[];
}
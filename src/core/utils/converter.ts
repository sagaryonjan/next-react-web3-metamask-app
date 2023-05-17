import { CURRENCY_CONVERSION_RATE } from "../config";

export const convertBusdToNep = (value: number): number => {
    return +(value / CURRENCY_CONVERSION_RATE).toFixed(2);
}

export const convertNepdToBusd = (value: number): number => {
    return +(value * CURRENCY_CONVERSION_RATE).toFixed(2)
}
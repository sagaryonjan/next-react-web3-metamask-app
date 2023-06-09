export interface Currency {
    nep: number;
    busd: number;
}

export interface WalletDetails {
    chainId: number | undefined;
    account: string | undefined;
    balance: string;
}
import { useState } from 'react';
import type { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import { useEffect } from 'react'

import { hooks } from '@/core/hooks/metaMask'
import { WalletDetails } from '../interfaces';

const { useChainId, useProvider,  useAccount } = hooks;

export const useWalletDetails = () : WalletDetails => {
    const provider = useProvider();
    const account = useAccount();
    const chainId = useChainId();

    const [balance, setBalance] = useState<BigNumber | undefined>(undefined);

    useEffect(() => {
        let stale = false;

        const getBalance = async () : Promise<void>  => {
            try {
                const balance = await provider?.getBalance(account ? account : '');
                if (!stale) { setBalance(balance); }
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };

        if (provider && account?.length) {
            void getBalance();
        }

        return () => {
            stale = true;
        };
    }, [provider, account]);

    const formattedBalance = balance !== undefined ? `Ξ ${formatEther(balance)}` : 'Loading...';

  return { 
    chainId, 
    account, 
    balance: formattedBalance 
};
}
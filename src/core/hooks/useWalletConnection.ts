import { hooks } from '@/core/hooks/metaMask'
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { IS_WALLET_CONNECTED } from '../config';

export const useWalletConnection = () : readonly [boolean, () => void, () => void] => {
  const isActive = hooks.useIsActive();
  const [cookies, setCookie] = useCookies([IS_WALLET_CONNECTED]);
  const [isWalletConnected, setIsWalletConnected] =  useState<boolean>(
    isActive && parseInt(cookies[IS_WALLET_CONNECTED]) === 1
  );

  const connectWallet = (): void => {
    setCookie(IS_WALLET_CONNECTED, 1);
    setIsWalletConnected(true);
  }

  const disConnectWallet = (): void => {
    setCookie(IS_WALLET_CONNECTED, 0);
    setIsWalletConnected(false);
  }

  return [isWalletConnected, connectWallet, disConnectWallet] as const;
}
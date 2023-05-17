import { useState, useEffect } from "react";
import { metaMask } from '@/core/hooks/metaMask'

import { WalletDetailModal } from "./WalletDetailModal";

export const WalletDetail : React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    useEffect(() => {
        void metaMask.connectEagerly().catch(() => {
            console.debug('Failed to connect eagerly to MetaMask')
        })
    }, []);

    const onClickCheckWalletDetails = () => { 
        setOpenModal(true); 
    }

    const closeModal = () => { 
        setOpenModal(false); 
    }

    return (
        <>
            <a href="#" className="text-center text-lg font-medium text-blue-500" onClick={onClickCheckWalletDetails}>Check Wallet Details</a>
            
            {openModal && (<WalletDetailModal closeModal={closeModal} />)}
        </>
    );
}
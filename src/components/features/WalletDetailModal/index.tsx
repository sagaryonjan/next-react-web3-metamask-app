import { Modal } from "../../common/Modal";
import { metaMask } from "@/core/hooks/metaMask";
import { useWalletConnection } from "@/core/hooks/useWalletConnection";
import { ConnectWallet } from "./ConnectWallet";
import { DisplayWallet } from "./DisplayWallet";

interface WalletDetailModalProps {
  closeModal: () => void;
}

export const WalletDetailModal: React.FC<WalletDetailModalProps> = ({ closeModal }) => {
    const [isWalletConnected, connectWallet, disConnectWallet] = useWalletConnection();

      const handleDisconnectWallet = async () => {
        await metaMask.resetState();
        disConnectWallet();
      }

      const handleConnectWallet  = async () => {
        await metaMask.activate();
        connectWallet();
      }

      return (
        <Modal title='Wallet Details' closeModal={closeModal}>
          {isWalletConnected ? (
            <DisplayWallet handleDisconnectWallet={handleDisconnectWallet} />
          ) : (
            <ConnectWallet handleConnectWallet={handleConnectWallet} closeModal={closeModal} /> 
          )}
        </Modal>
    );
}
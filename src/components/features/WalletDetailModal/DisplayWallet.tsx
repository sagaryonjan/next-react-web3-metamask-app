import { useWalletDetails } from "@/core/hooks/useWalletDetails";

interface DisplayWalletProps {
    handleDisconnectWallet: () => void;
}

export const DisplayWallet : React.FC<DisplayWalletProps>  = ({ handleDisconnectWallet }) => {
    const { chainId,  account,  balance } = useWalletDetails();

    return (
        <>
         <div className="relative px-6 pb-4 flex-auto">
        <div>
            <div className="flex justify-between border-b px-5 py-4">
                <div className="font-medium text-sm text-gray-500 uppercase">Key</div>
                <div className="font-medium text-sm text-gray-500 uppercase">Value</div>
            </div>
            <div className="flex justify-between border-b px-5 py-4">
                <div>Account</div>
                <div> {account?.slice(0, 5) + '...' + account?.slice(-4)}</div>
            </div>
            <div className="flex justify-between border-b px-5 py-4">
                <div>Chain ID</div>
                <div>{chainId}</div>
            </div>
            <div className="flex justify-between border-b px-5 py-4">
                <div>Balance</div>
                <div>{balance}</div>
            </div>
        </div>
        </div>
        <div className="flex p-6 rounded-b">
        <button
            className="bg-red-500 hover:bg-red-600 text-white w-full hover:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleDisconnectWallet}
        >
            Disconnect
        </button>
        </div>
        </>
    )
  }
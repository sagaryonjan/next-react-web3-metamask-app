interface ConnectWalletProps {
    handleConnectWallet: () => void;
    closeModal: () => void;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({ handleConnectWallet, closeModal }) => {
    return (
        <>
         <div className="relative px-6 py-2 flex-auto">
            <p className="text-red-500 leading-relaxed">
                Wallet not connected. Please click the &apos;Connect&apos; button below.
            </p>
        </div>
        <div className="flex items-center justify-center p-6 rounded-b">
        <button
              className="bg-blue-500 hover:bg-blue-600 active:bg-blue-600 font-bold uppercase text-white text-sm w-full px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleConnectWallet}
          >
              Connect
          </button>   
           <button
              className="bg-gray-200 hover:bg-gray-300 active:bg-gray-200 font-bold uppercase text-gray-800 text-sm w-full px-6 py-3 ml-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={closeModal}
          >
              Cancel
          </button>
        </div>
        </>
    )
}
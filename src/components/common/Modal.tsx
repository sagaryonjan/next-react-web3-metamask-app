
interface ModalProps {
    title: string;
    children?: React.ReactNode;
    closeModal: () => void;
}
  
export const Modal = ({title, children, closeModal}: ModalProps) => {
    return (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative xl:w-4/12 lg:w-5/12 md:w-8/12 sm:w-full  mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-xl font-medium text-gray-900 ">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0  text-gray-800 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                     
                    <svg width="24" height="24" fill="#000" viewBox="0 0 24 24">
                      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"/>
                      </svg>
                  </button>
                </div>
                {/*body*/}
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
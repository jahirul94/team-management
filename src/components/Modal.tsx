
const Modal = () => {
    return (
        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white w-1/2 p-6 rounded shadow-lg">
                    <div className="flex justify-end">
                    </div>
                    <div className="mt-4">
                        {/* Modal content goes here */}
                        <p>This is the modal content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
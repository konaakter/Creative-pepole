import React from 'react';

const Modal = () => {
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <embed width='450px' height='300px' src="https://www.youtube.com/embed/rGjHwc19xKw" type="" />
                    <div className="modal-action">

                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default Modal;
import React from 'react';

const Modal = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <p>Are you sure you want to delete this item?</p>
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCancel}>No</button>
            </div>
        </div>
    );
}

export default Modal;
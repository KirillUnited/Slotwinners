import React from "react";

const Modal = ({isVisible = false, title, header, content, footer, onClose, ...rest}) => {
    return !isVisible ? null : (
        <div className="modal" {...rest}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                {
                    header
                        ?
                        <div className="modal-header">{header}</div>
                        :
                        <div className="modal-header">
                            <h3 className="modal-title">{title}</h3>
                            <span className="modal-close" onClick={onClose}>&times;</span>
                        </div>
                }
                <div className="modal-content">{content}</div>
                {footer && <div className="modal-footer">{footer}</div>}
            </div>
        </div>
    );
};

export default Modal;

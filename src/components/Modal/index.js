import React from "react";
import ReactDOM from "react-dom";

//Styles
import "../../css/Modal.css";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modalBackground">{children}</div>,
    document.getElementById("modal")
  );
};

export { Modal };

import React from "react";
import { WithStorageListener } from "./withStorageListener";

const ChangeAlert = ({ show, toggleShow }) => {
  return (
    show && (
      <div className="white">
        <p>Hubo cambios</p>
        <button
          onClick={() => {
            toggleShow();
          }}
        >
          Volver a cargar información
        </button>
      </div>
    )
  );
};

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener };

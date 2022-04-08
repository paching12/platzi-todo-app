import React from "react";
import { WithStorageListener } from "./withStorageListener";

const ChangeAlert = ({ show, toggleShow }) => {
  if (show)
    return (
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
    );
  else return false;
};

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener };

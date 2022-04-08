import React from "react";
import { WithStorageListener } from "./withStorageListener";

const ChangeAlert = ({ show, toggleChange }) => {
  if (show)
    return (
      <div className="white">
        <p>Hubo cambios</p>
        <button
          onClick={() => {
            toggleChange(false);
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

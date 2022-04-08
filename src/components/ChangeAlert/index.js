import React from "react";
import { WithStorageListener } from "./withStorageListener";

const ChangeAlert = ({ show, toggleChange, setSync }) => {
  if (show)
    return (
      <div className="white">
        <p>Hubo cambios</p>
        <button
          onClick={() => {
            setSync(true);
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

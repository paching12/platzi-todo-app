import React from "react";
import { useStorageListener } from "./useStorageListener";

import '../../css/ChangeAlert.css';

const ChangeAlert = (props) => {
  const { show, toggleShow } = useStorageListener(props.sync);
  return (
    show && (
      <div className="changeAlert">
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

export { ChangeAlert };

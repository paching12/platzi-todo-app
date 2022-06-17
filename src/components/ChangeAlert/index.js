import React from "react";
import { useStorageListener } from "./useStorageListener";

const ChangeAlert = (props) => {
  const { show, toggleShow } = useStorageListener(props.sync);
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

export { ChangeAlert };

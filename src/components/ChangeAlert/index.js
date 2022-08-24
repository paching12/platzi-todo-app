import React from "react";
import { useStorageListener } from "../../customHooks/useStorageListener";

import "../../css/ChangeAlert.css";

const ChangeAlert = (props) => {
  const { show, toggleShow } = useStorageListener(props.sync);
  return (
    show && (
      <div className="changeAlert">
        <p>There were changes</p>
        <button
          onClick={() => {
            toggleShow();
          }}
        >
          Load information again
        </button>
      </div>
    )
  );
};

export { ChangeAlert };

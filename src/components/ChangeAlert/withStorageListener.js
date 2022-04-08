import React from "react";

function WithStorageListener(WrappedComponent) {
  return function WrappedComponentWithStoreListener({
    show,
    toggleChange,
    setSync,
  }) {
    console.log();
    return (
      <WrappedComponent
        show={show}
        toggleChange={toggleChange}
        setSync={setSync}
      />
    );
  };
}

export { WithStorageListener };

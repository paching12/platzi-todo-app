import React from "react";

function WithStorageListener(WrappedComponent) {
  return function WrappedComponentWithStoreListener({
    storageChange,
    setStorageChange,
  }) {
    return (
      <WrappedComponent show={storageChange} toggleChange={setStorageChange} />
    );
  };
}

export { WithStorageListener };

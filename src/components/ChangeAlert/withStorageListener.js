import React from "react";

function WithStorageListener(WrappedComponent) {
  return function WrappedComponentWithStoreListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);
    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      setStorageChange(false);
      props.sync();
    };
    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}

export { WithStorageListener };

import react from "react";
import React from "react";

function WithStorageListener(WrappedComponent) {
  const [storageChange, setStorageChange] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        setStorageChange(true);
      }
    });
    return () => {
      window.removeEventListener("storage");
    };
  }, []);
  return function WrappedComponentWithStoreListener(props) {
    const toggleShow = () => {
      props.sync();
      setStorageChange(false);
    };
    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}

export { WithStorageListener };

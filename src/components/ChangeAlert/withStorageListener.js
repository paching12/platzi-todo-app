import React from "react";

function WithStorageListener(WrappedComponent) {
  return function WrappedComponentWithStoreListener(props) {
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
    const toggleShow = () => {
      props.sync();
      setStorageChange(false);
    };
    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}

export { WithStorageListener };

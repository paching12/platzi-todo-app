import React from "react";

function useStorageListener(sync) {
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

  const toggleShow = async () => {
    await sync();
    setStorageChange(false);
  };
  return { show: storageChange, toggleShow };
}

export { useStorageListener };

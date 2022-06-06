import React from "react";

export const useLocalStorage = (itemName, initState = []) => {
  const [items, setItems] = React.useState(initState);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sync, setSync] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parseItem = [];
        const localStorageItem = localStorage.getItem(itemName);

        if (localStorageItem) {
          parseItem = JSON.parse(localStorageItem);
          setItems(parseItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(items));
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setLoading(false);
      setSync(true);
    }, 1500);
  }, [sync]);

  const sincronize = () => {
    setLoading(true);
    setSync(false);
  };

  const saveItems = (newItems) => {
    try {
      const stringifyTodo = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifyTodo);
      setItems(newItems);
    } catch (error) {
      setError(error);
    }
  };

  return {
    items,
    setItems,
    saveItems,
    loading,
    setLoading,
    error,
    setError,
    setSync,
    sync,
    sincronize,
  };
};

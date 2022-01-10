import React from "react";

export const useLocalStorage = (
  itemName,
  setLoading,
  setError,
  initState = []
) => {
  const [items, setItems] = React.useState(initState);

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
      console.log(false);
    }, 1500);
  }, []);

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
    saveItems,
  };
};

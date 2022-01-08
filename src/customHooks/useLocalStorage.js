import React from "react";

export const useLocalStorage = (itemName, initState = []) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parseItem = [];

  if (localStorageItem) {
    parseItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initState));
  }

  const [Items, setItems] = React.useState(parseItem);

  const saveItems = (newItems) => {
    const stringifyTodo = JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifyTodo);
    setItems(newItems);
  };

  return [Items, setItems, saveItems];
};

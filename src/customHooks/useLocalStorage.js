import React from "react";

const initialState = ({initialValue}) => ({
  items: initialValue,
  loading: false,
  error: false,
  sync: false,
});

const reducer = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.success:
      return {
        ...state,
        loading: false,
        sync: action?.payload?.sync,
        items: action?.payload?.items,
        error: false,
      };
    case actionTypes.save:
      return {
        ...state,
        loading: false,
        sync: false,
        items: action?.payload,
        error: false,
      };
    case actionTypes.onLoading:
      return {
        ...state, 
        loading: action.payload,
      }
    case actionTypes.sync: 
      return {
        ...state,
        loading: true,
        sync: false,
      };
    default: return state;
  }
}

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  loading: 'LOADING',
  sync: 'SYNC',
};


export const useLocalStorage = (itemName, initialValue = []) => {

  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const {
    items,
    loading,
    error,
    sync,
  } = state;

  // Action creators
  const onError = (error) => {
    dispatch({
      type: actionTypes.error,
      payload: error
    });
  };

  const onSuccess = ({parseItem, sync}) => {
    dispatch({
      type: actionTypes.success,
      payload: {
        items: parseItem, 
        sync,
      },
    });
  };

  const onSave = (items) => dispatch({
    type: actionTypes.save,
    payload: items,
  });

  React.useEffect(() => {
    setTimeout(() => {
      let parseItem = [];
      try {
        const localStorageItem = localStorage.getItem(itemName);

        if (localStorageItem) {
          parseItem = JSON.parse(localStorageItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(items));
        }
      } catch (error) {
        console.error(error);
        onError(error);
      }

      onSuccess({parseItem, sync: true});
    }, 1500);
  }, [sync]);

  const sincronize = () => dispatch({
    type: actionTypes.sync
  });

  const saveItems = (newItems) => {
    try {
      const stringifyTodo = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifyTodo);
      onSave(newItems);
    } catch (error) {
      onError(error);
    }
  };

  return {
    items,
    saveItems,
    loading,
    error,
    sync,
    sincronize,
  };
};

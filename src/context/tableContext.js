import { createContext, useState, useCallback } from "react";

export const tableItemsContext = createContext(null);

export const TableItemsProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    const result = await fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then((response) => response.json())
      .then((data) => {
        setItems([...data]);
        setError(null);
      })
      .catch((error) => {
        setItems(null);
        setError("Error:", error.message);
      });
    return result;
  }, []);

  return (
    <tableItemsContext.Provider
      value={{ items, setItems, error, setError, getData }}
    >
      {children}
    </tableItemsContext.Provider>
  );
};

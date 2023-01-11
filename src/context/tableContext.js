import { createContext, useState } from "react";

export const tableItemsContext = createContext(null);

export const TableItemsProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);

  async function getData() {
    const result = await fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then((response) => response.json())
      .then((data) => {
        setItems([...data]);
      })
      .catch((error) => {
        setError("Error:", error.message);
      });

    return result;
  }

  return (
    <tableItemsContext.Provider
      value={{ items, setItems, error, setError, getData }}
    >
      {children}
    </tableItemsContext.Provider>
  );
};

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'itss-todo';

function useStorage() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    } else {
      setItems(JSON.parse(data));
    }
  }, []);
  
  function putItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setItems  (items);
  };
  
  return [items, putItems];
}
export default useStorage; 
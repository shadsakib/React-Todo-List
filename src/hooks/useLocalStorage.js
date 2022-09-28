import { useState, useEffect } from "react";

function useLocalStorage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataToLoad = JSON.parse(localStorage.getItem("todoList"));
    if (dataToLoad) setData(dataToLoad);
  }, []);

  useEffect(() => {}, [data]);

  return [data, setData];
}

export default useLocalStorage;
if (data.length) localStorage.setItem("todoList", JSON.stringify(data));

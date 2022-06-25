import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const reset = () => setValue(initialValue);
    const bind = {
      value,
      onChange: (e) => setValue(e.target.value)
    };
    return [value, bind, reset];
}

export { useFetch, useInput };
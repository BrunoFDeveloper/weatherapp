import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const dataJson = await res.json();
      setData(dataJson);
    };

    fetchData();
  }, []);

  return data;
};

export default useFetch;

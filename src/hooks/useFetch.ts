import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url: string, initialValue: []) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { loading, data };
};

// Usage:
// // const { loading, data } = useFetch(
// //   'https://api.github.com/users/matthew-d-brown',
// //   []
// // );
// // if (loading) return <div>loading</div>;
// // console.log(data);

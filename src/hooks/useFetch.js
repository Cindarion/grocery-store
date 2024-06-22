import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchJSONData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchJSONData();
  }, [url]);

  return { data, loading, error };
};

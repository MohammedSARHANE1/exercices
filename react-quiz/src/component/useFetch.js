import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          // If response is not OK, throw an error with status and message
          const errorMessage = await response.text();
          throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        // Set error state with detailed error information
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

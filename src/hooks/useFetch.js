import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoadingFetch, setIsLoadingFetch] = useState(false);
  const [errorFetch, setErrorFetch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingFetch(true);
      setErrorFetch(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        setErrorFetch(err);
      } finally {
        setIsLoadingFetch(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoadingFetch, errorFetch };
}

export default useFetch;

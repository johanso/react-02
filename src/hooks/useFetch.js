import React from 'react';

const useFetch = (url) => {
   const [response, setResponse] = React.useState(null);
   const [error, setError] = React.useState(null);
   const [loading, setLoading] = React.useState(false);
   const [refetchIndex, setRefetchIndex] = React.useState(0)

   const refetch = () => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)
   
   React.useEffect(() => {
      const doFecth = async () => {
         setLoading(true);
         try {
            const resp = await fetch(url)
            const json = await resp.json();
            setResponse(json)
         } catch (err) {
            setError(err)
         } finally {
            setLoading(false);
         }
      }
      doFecth();
   }, [refetchIndex, url])

   return { response, error, loading, refetch  };
}

export default useFetch;

import { useCallback, useState, useEffect } from 'react';

import useListDataFetch from './useListDataFetch';
import useCachedRequestDataFetch from './useCachedRequestDataFetch';

const CACHE_TIMEOUT = 15 * 60 * 1000; // 15min

const useHandleFetch = (request, cacheKey) => {
  const [data, setData] = useState([]);

  const getData = useCallback(() => request(), [request]);

  const { doRequest } = useCachedRequestDataFetch(
    getData,
    cacheKey,
    CACHE_TIMEOUT,
  );

  const { loading, list, count } = useListDataFetch(doRequest);

  useEffect(() => {
    if (count > 0 && !!list) {
      setData(list);
    }

    return () => {};
  }, [list, count]);

  return { loading, data };
};

export default useHandleFetch;

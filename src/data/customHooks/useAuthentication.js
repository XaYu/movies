import { useCallback, useState, useEffect } from 'react';

import useDataFetch from './useDataFetch';
import useCachedRequestDataFetch from './useCachedRequestDataFetch';
import api from '../../api/api';

const RESOURCE = 'authentication';
const CACHE_KEY = 'authentication';
const CACHE_TIMEOUT = 15 * 60 * 1000; // 15min

const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const doAuthenticate = useCallback(() => api.resourceFetch(RESOURCE), []);

  const { doRequest } = useCachedRequestDataFetch(
    doAuthenticate,
    CACHE_KEY,
    CACHE_TIMEOUT,
  );

  const { loading, result } = useDataFetch(doRequest);

  useEffect(() => {
    if (typeof result === 'object') {
      setAuthenticated(result.success);
    }

    return () => {};
  }, [result]);

  return { loading, authenticated };
};

export default useAuthentication;

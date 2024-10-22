import { useState, useEffect, useCallback } from 'react';

const ifNotAborted = (aborted, callback) => (...callbackArgs) => {
  if (!aborted && typeof callback === 'function') {
    callback(...callbackArgs);
  }
};

/**
 * Generic custom hook for handling data fetching based on a given fetch function.
 * When the fetch function changes, the data fetch is executed.
 *
 * @param {function} fetchFunction the function that handles data fetching
 * @param {any} initialData the initial state data, if any
 * @param {any} key a value that, when changed, forces a new fetch
 * @returns an object with: loading - if data is being fetched; result - the fetch result, if any; error - if the fetch results in error; reset - function for reseting to initial state, resetError - function to reset only the error, if any ; refresh - function to force a new fetch
 */
const useDataFetch = (fetchFunction, initialData, key) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(initialData);
  const [error, setError] = useState();

  const onSuccess = useCallback((res) => {
    setResult(res);
    setLoading(false);
  }, []);

  const onError = useCallback((err) => {
    setError(err);
    console.error(err);
    setLoading(false);
  }, []);

  const reset = useCallback(
    (newInitialData) => {
      setResult(newInitialData || initialData);
      setError();
      setLoading(false);
    },
    [initialData],
  );

  const resetError = useCallback(() => {
    setError();
  }, []);

  const fetch = useCallback(() => {
    if (typeof fetchFunction === 'function') {
      setLoading(true);
      return Promise.resolve(fetchFunction());
    }

    return Promise.resolve();
  }, [fetchFunction]);

  const refresh = useCallback(() => fetch()
    .then((res) => {
      onSuccess(res);
      return res;
    })
    .catch((err) => {
      onError(err);
      return Promise.reject(err);
    }), [fetch, onError, onSuccess]);

  useEffect(() => {
    let abort = false;

    fetch()
      .then((res) => {
        ifNotAborted(abort, onSuccess)(res);
      })
      .catch((err) => {
        ifNotAborted(abort, onError)(err);
      });

    return () => {
      abort = true;
    };
  }, [onSuccess, onError, key, fetch]);

  return {
    loading,
    result,
    error,
    reset,
    resetError,
    refresh,
  };
};

export default useDataFetch;

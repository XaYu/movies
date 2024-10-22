import { useCallback } from 'react';
import useDataFetch from './useDataFetch';

/**
 * Custom hook for handling data fetch.
 * When the fetchData function changes, the data is refreshed
 * @param {function} fetchData the function responsible for fetching data; it's expected to resolve with an object containing count and list props.
 * @param {any} key a value that, when changed, forces a new fetch
 * @returns an object with the fetched data, the total items count and if it's currenly fetching data
 */
const useListDataFetch = (fetchData, key, initialList, initialCount) => {
  const {
    loading,
    result,
    error,
    reset,
    resetError,
    refresh,
  } = useDataFetch(fetchData, {
    list: initialList || [],
    count: initialCount || 0,
  }, key);

  const doReset = useCallback((list, count) => {
    reset({
      list: list || initialList,
      count: count || initialCount,
    });
  }, [initialList, initialCount, reset]);

  return {
    loading,
    list: result?.list,
    count: result?.count,
    error,
    reset: doReset,
    resetError,
    refresh,
  };
};

export default useListDataFetch;

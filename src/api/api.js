const DEFAULT_METHOD = 'GET';
const DEFAULT_URL = 'https://api.themoviedb.org/3';
const DEFAULT_AUTHORIZATION = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2VmYzQ0MGEzY2E3NmQyZDhmOTM2YjI3YjkyNmYxNSIsIm5iZiI6MTcyOTAwNzc0Ni41MTM2NjEsInN1YiI6IjY3MGU4ZTliZDVmOTNhM2RhMGJjNWM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._SbGKR_R84dOhUoORuJXnhHEku33c3TQLy-UYXifCbg';

const getResource = (resource) => `${DEFAULT_URL}/${resource}`;

const getListResponse = (res, mapper) => {
  const map = typeof mapper === 'function'
    ? (element) => mapper(element)
    : (element) => element;
  return {
    list: (res.results || []).map((elem) => map(elem)),
    count: res.total_pages,
  };
};

const getResourceOptions = (options, method = DEFAULT_METHOD) => ({
  method,
  headers: {
    accept: 'application/json',
    Authorization: DEFAULT_AUTHORIZATION,
  },
  ...options,
});

const resourceFetch = (resource, options) => {
  const url = resource ? getResource(resource) : DEFAULT_URL;

  return fetch(url, getResourceOptions(options))
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.error(err));
};

export default { resourceFetch, getResourceOptions, getListResponse };

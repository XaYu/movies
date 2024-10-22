import MoviesListModel from '../models/moviesListModel';
import api from '../../api/api';
import configs from '../../configs';

const RESOURCE = 'movie';

const getRelationResource = (relation) => `${RESOURCE}/${relation}`;

const getMovies = (type, language) => api
  .resourceFetch(getRelationResource(`${type}?language=${language}`))
  .then((res) => api.getListResponse(res, MoviesListModel.buildFromJSON));

// <GET>/movie/popular?language=:language</GET>
const getTopMovies = (language = configs.DEFAULT_LANGUAGE) => getMovies('popular', language);

// <GET>/movie/top_rated?language=:language</GET>
const getRatedMovies = (language = configs.DEFAULT_LANGUAGE) => getMovies('top_rated', language);

export default { getTopMovies, getRatedMovies };

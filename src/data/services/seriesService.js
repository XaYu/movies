import SeriesListModel from '../models/seriesListModel';
import api from '../../api/api';
import configs from '../../configs';

const RESOURCE = 'tv';

const getRelationResource = (relation) => `${RESOURCE}/${relation}`;

const getSeries = (type, language) => api
  .resourceFetch(getRelationResource(`${type}?language=${language}`))
  .then((res) => api.getListResponse(res, SeriesListModel.buildFromJSON));

// <GET>/tv/popular?language=:language</GET>
const getTopSeries = (language = configs.DEFAULT_LANGUAGE) => getSeries('popular', language);

// <GET>/tv/top_rated?language=:language</GET>
const getRatedSeries = (language = configs.DEFAULT_LANGUAGE) => getSeries('top_rated', language);

export default { getTopSeries, getRatedSeries };

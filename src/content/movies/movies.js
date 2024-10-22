import React from 'react';

import { MySlider } from '../../components/slider/slider';
import moviesService from '../../data/services/moviesService';
import useHandleFetch from '../../data/customHooks/useHandleFetch';
import './movies.css';

export function Movies() {
  const { loading: topMoviesLoading, data: topMovies } = useHandleFetch(
    moviesService.getTopMovies,
    'topMovies',
  );

  const { loading: ratedMoviesLoading, data: ratedMovies } = useHandleFetch(
    moviesService.getRatedMovies,
    'ratedMovies',
  );

  return (
    <div className="m-movies">
      {/* separate into single responsive component */}
      <h3>Movies - Popular</h3>
      <MySlider items={topMovies} loading={topMoviesLoading} />
      <h3>Movies - Top Rated</h3>
      <MySlider items={ratedMovies} loading={ratedMoviesLoading} />
      {/* <pre>{JSON.stringify(movies, null, 2)}</pre> */}
    </div>
  );
}

export default Movies;

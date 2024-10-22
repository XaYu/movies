import React from 'react';

import { MySlider } from '../../components/slider/slider';
import seriesService from '../../data/services/seriesService';
import useHandleFetch from '../../data/customHooks/useHandleFetch';
import './series.css';

export function Series() {
  const { loading: topSeriesLoading, data: topSeries } = useHandleFetch(
    seriesService.getTopSeries,
    'topSeries',
  );

  const { loading: ratedSeriesLoading, data: ratedSeries } = useHandleFetch(
    seriesService.getRatedSeries,
    'ratedSeries',
  );

  return (
    <div className="m-series">
      {/* separate into single responsive component */}
      <h3>Series - Top Popular</h3>
      <pre>{`Loading Series: ${topSeriesLoading}`}</pre>
      <MySlider items={topSeries} />
      <h3>Series - Top Rated</h3>
      <pre>{`Loading Series: ${ratedSeriesLoading}`}</pre>
      <MySlider items={ratedSeries} />
      {/* <pre>{JSON.stringify(series, null, 2)}</pre> */}
    </div>
  );
}

export default Series;

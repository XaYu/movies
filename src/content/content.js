import React from 'react';

import { Movies } from './movies/movies';
import { Series } from './series/series';
import useAuthentication from '../data/customHooks/useAuthentication';
import './content.css';

export function AppContent() {
  const { authenticated, loading } = useAuthentication();

  return (
    <div className="m-appContent">
      {authenticated && (
        <>
          <Movies />
          <Series />
        </>
      )}
      {loading && !authenticated && <p>Please wait...</p>}
    </div>
  );
}

export default AppContent;

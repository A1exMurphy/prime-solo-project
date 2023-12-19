import React from 'react';

import { useHistory } from 'react-router-dom';

function TappedBeers() {
  const history = useHistory();

  return (
    <div>

      <center>
        <div>Tapped Beers</div>
      </center>
    </div>
  );
}

export default TappedBeers;
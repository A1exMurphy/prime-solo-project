import React from 'react';
import NavMenu from '../NavMenu/NavMenu';

import { useHistory } from 'react-router-dom';

function TappedBeers() {
  const history = useHistory();

  return (
    <div>
        <NavMenu />
      <center>
        <div>Tapped Beers</div>
      </center>
    </div>
  );
}

export default TappedBeers;
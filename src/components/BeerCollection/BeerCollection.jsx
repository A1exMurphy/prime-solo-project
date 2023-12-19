import React from 'react';
import NavMenu from '../NavMenu/NavMenu';

import { useHistory } from 'react-router-dom';

function BeerCollection() {
  const history = useHistory();

  return (
    <div>
        <NavMenu />
      <center>
        <div>Beer Collection</div>
      </center>
    </div>
  );
}

export default BeerCollection;
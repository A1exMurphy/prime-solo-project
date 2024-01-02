import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

function TappedBeers() {
  const tappedBeers = useSelector((store) => store.tapped)
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
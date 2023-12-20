import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function BeerCollection() {
  const history = useHistory();
  const dispatch  = useDispatch();

  dispatch({
    type: 'GET_COLLECTION'
  })

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
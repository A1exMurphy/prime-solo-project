import { React, useEffect } from 'react';
import NavMenu from '../NavMenu/NavMenu';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

function ChangeTheTap() {
  const history = useHistory();
  const dispatch  = useDispatch();

  const tappedBeers = useSelector((store) => store.tapped)
    console.log(tappedBeers, 'beers w/ is_tapped=true')
  
  useEffect(() => {

    fetchTapped();
  }, []);
  
  const fetchTapped = () => {
    console.log('start GET dispatch')
    dispatch({
      type: 'GET_TAPPED',
    })    
    
  }

  const beerCollection  = () => {

    history.push('/selectbrew')
    }

  return (
    <div>
        <NavMenu />
      <center>
        <div>Change The Tap</div>
          {tappedBeers && tappedBeers.map((tap) => {
            return(
              <div>
                {tap.beer_name}
                </div>
            )
          })}
        <button
          onClick={beerCollection}
          >Add Tap
        </button>
      </center>
    </div>
  );
}

export default ChangeTheTap;
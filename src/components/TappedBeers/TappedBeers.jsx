import { React, useEffect } from 'react';
import NavMenu from '../NavMenu/NavMenu';
import { useDispatch, useSelector } from 'react-redux';


function TappedBeers() {
  const tappedBeers = useSelector((store) => store.tapped)
  const dispatch  = useDispatch();
  // console.log(tappedBeers, 'tapped')

  useEffect(() => {
    fetchTaps();
  }, []);

  const fetchTaps = () => {

    dispatch({
      type: "GET_TAPPED",
    })    
  }
//unresolved issue: ensuring that tappedBeers was truthy was insufficient to complete the render, I needed to ensure tappedBeers.map was truthy and it is unclear to me why.
  return (
    <div>
        <NavMenu />
      <center>
        <div>Tapped Beers</div>
        {tappedBeers.map && tappedBeers.map((oneBrew) => {
          return(
            <div key={oneBrew.id}>
              {oneBrew.beer_name}
            </div>
          )
        })}
      </center>
    </div>
  );
}

export default TappedBeers;
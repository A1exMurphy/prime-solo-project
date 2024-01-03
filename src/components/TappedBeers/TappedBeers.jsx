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
        <h3>Tapped Beers</h3>
        </center>
        {tappedBeers.map && tappedBeers.map((oneBrew) => {
          return(
            <div 
              className="beerList"
              key={oneBrew.id}>
                {oneBrew.beer_name}
                <span 
                  className="notes"
                  >
                  {oneBrew.notes}
                </span>
            </div>
          )
        })}
    </div>
  );
}

export default TappedBeers;
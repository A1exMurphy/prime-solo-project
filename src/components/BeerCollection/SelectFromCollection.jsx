import { React, useEffect } from 'react';
import NavMenu from '../NavMenu/NavMenu';
import { useDispatch, useSelector } from 'react-redux';


function SelectFromCollection() {
  const beerCollection  = useSelector((store) => store.brews)
  const dispatch  = useDispatch();
  // console.log(beerCollection, "beer collection")

  useEffect(() => {
    // console.log('run fetchCollection function')
    fetchCollection();
  }, []);

  const fetchCollection = () => {
    // console.log('start GET dispatch')
  dispatch({
    type: "GET_COLLECTION",
  })    
  }

  const tappedTrue = () => {
    console.log('clicked add')
  }

  const tappedFalse = () => {
    console.log('clicked remove')

    
  }

  return (
    <div>
        <NavMenu />
      <center>
        {beerCollection && beerCollection.map((oneBrew) => {
          return(
            <div key={oneBrew.id}>
              {oneBrew.beer_name}
              <span><button onClick={tappedTrue}>
                add
                </button></span>
            
              <span><button onClick={tappedFalse}>
                remove
                </button></span>
            </div>
          )
        })}
        <div>Beer Collection
        </div>
      </center>
    </div>
  );
}

export default SelectFromCollection;
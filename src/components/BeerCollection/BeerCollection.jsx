import { React, useEffect } from 'react';
import NavMenu from '../NavMenu/NavMenu';
import { useDispatch, useSelector } from 'react-redux';


function BeerCollection() {
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

  const updateCollection = () => {
    console.log('update buttoning')
  }

  const removeFromCollection = () => {
    console.log('remove buttoning')
  }

  const addToCollection = () => {
    console.log('add buttoning')
  }


  return (
    <div>
        <NavMenu />
      <center>
        <h3>Beer Collection
        </h3>
        </center>
        {beerCollection && beerCollection.map((oneBrew) => {
          return(
            <div 
              className="beerList"
              key={oneBrew.id}>
                <button onClick={updateCollection}>Update</button>
                <button onClick={removeFromCollection}>Remove</button>
                {oneBrew.beer_name}
            </div>
          )
        })}
        <div><button onClick={addToCollection}>Add to Collection</button></div>
    </div>
  );
}

export default BeerCollection;
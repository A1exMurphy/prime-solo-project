import { React, useEffect } from 'react';
import NavMenu from '../NavMenu/NavMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function BeerCollection() {
  const beerCollection  = useSelector((store) => store.brews)
  const dispatch  = useDispatch();
  const history = useHistory();

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

  const updateCollection = (id) => {
    console.log('update buttoning')

    // dispatch({
    //   type: 'UPDATE_BEER_IN_COLLECTION',
    //   payload: id
    // })
    history.push('/editbrew')
  }

  const removeFromCollection = (id) => {
    console.log('remove buttoning')

    dispatch({
      type: "REMOVE_FROM_COLLECTION",
      payload: id
    })
  }

  const addToCollection = () => {
    // console.log('add buttoning')

    history.push('/addbrew')
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
                <button onClick={() => updateCollection(oneBrew.id)}>Update</button>
                <button onClick={() => removeFromCollection(oneBrew.id)}>Remove</button>
                {oneBrew.beer_name}
            </div>
          )
        })}
        <div><button onClick={addToCollection}>Add to Collection</button></div>
    </div>
  );
}

export default BeerCollection;
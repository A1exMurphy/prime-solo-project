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

  const tappedTrue = (oneBrew) => {
    // console.log('clicked add')


    dispatch({
        type: "SET_TAPPED_STATUS",
        payload: {oneBrew: oneBrew, tapped: "true"}
    })
  }

  const tappedFalse = (oneBrew) => {
    // console.log('clicked remove')

    dispatch({
        type: "SET_TAPPED_STATUS",
        payload: {oneBrew: oneBrew, tapped: "false"}
    })   
  }

  return (
    <div>
        <NavMenu />
      <center>
        {beerCollection && beerCollection.map((oneBrew) => {
          return(
            <div key={oneBrew.id}>
              {oneBrew.beer_name}
              <span><button onClick={() => tappedTrue(oneBrew)}>
                add
                </button></span>
            
              <span><button onClick={() => tappedFalse(oneBrew)}>
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
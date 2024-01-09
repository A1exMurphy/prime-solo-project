import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';


function EditBrew() {
  const selectedBrew  = useSelector((store) => store.brewForUpdate)
  const history = useHistory();
  const dispatch = useDispatch();

  //Intitially trying to use local state to render onChange and redux state to render
  //initial values, was causing async problem
  //set local state values to the current property values in redux state

  // const [beerName, setBeerName] = useState(selectedBrew.beer_name);
  // const [imageUrl, setImageUrl] = useState(selectedBrew.image);
  // const [notes, setNotes] = useState(selectedBrew.notes);

  //functions to collect inputs as they are changed and dispatch changes to redux.
  const name = (e, action) => {
    event.preventDefault();
    console.log('somethings happening')

    dispatch({
      type: 'SET_BREW_FOR_UPDATE',
      payload: {
        id: selectedBrew.id,
        beer_name: event.target.value,
        image: document.getElementById('imageUrl').value,
        notes: document.getElementById('notes').value
      }
    })
  }

  const image = (e, action) => {
    event.preventDefault();
    console.log('somethings happening')

    dispatch({
      type: 'SET_BREW_FOR_UPDATE',
      payload: {
        id: selectedBrew.id,
        beer_name: document.getElementById('beerName').value,
        image: event.target.value,
        notes: document.getElementById('notes').value
      }
    })
  }

  const notes = (e, action) => {
    event.preventDefault();
    console.log('somethings happening')

    dispatch({
      type: 'SET_BREW_FOR_UPDATE',
      payload: {
        id: selectedBrew.id,
        beer_name: document.getElementById('beerName').value,
        image: document.getElementById('imageUrl').value,
        notes: event.target.value
      }
    })
  }

  //function to collect values from form inputs and dispatch to saga generator
  const onSubmit = () => {

    
    let newInputs = {
      beerID: selectedBrew.id,
      beer_name: document.getElementById('beerName').value,
      notes: document.getElementById('notes').value,
      image: document.getElementById('imageUrl').value
    }
    
    dispatch({
      type: "UPDATE_BREW",
      payload: newInputs
    });

    history.push('/beercollection')


  }

  const backToCollection = () => {
    history.push('/beercollection')
  }


  return (
    <div>
      <NavMenu />
      <center>
        
        <form onSubmit={onSubmit}>
          <input
            id='beerName'
            type='text'
            placeholder={`${selectedBrew.beer_name}`}
            onChange={(e) => name(e.target.value)}
            value={`${selectedBrew.beer_name}`}
              >
          </input>

          <input
            id='imageUrl'
            type='text'
            placeholder={`${selectedBrew.image}`}
            onChange={(e) => image(e.target.value)}
            value={`${selectedBrew.image}`}
              >        
          </input>

          <input
            id='notes'
            type='textbox'
            placeholder={`${selectedBrew.notes}`}
            onChange={(e) => notes(e.target.value)}
            value={`${selectedBrew.notes}`}
              >         
          </input>

          <button>
            Update Brew
          </button>
        </form>
          <button onClick={backToCollection}>Back to Collection</button>
      </center>
    </div>
  )
}

export default EditBrew;
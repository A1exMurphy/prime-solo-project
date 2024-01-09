import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';


function EditBrew() {
  const selectedBrew  = useSelector((store) => store.brewForUpdate)
  const history = useHistory();
  const dispatch = useDispatch();

  //set local state values to the current property values in redux state
  const [beerName, setBeerName] = useState(selectedBrew.beer_name);
  const [imageUrl, setImageUrl] = useState(selectedBrew.image);
  const [notes, setNotes] = useState(selectedBrew.notes);

  //function to collect values from form inputs and dispatch to saga generator
  const onSubmit = () => {

    
    let newInputs = {
      beerID: selectedBrew.id,
      beer_name: beerName,
      notes: notes,
      image: imageUrl
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
            onChange={(e) => setBeerName(e.target.value)}
            value={`${selectedBrew.beer_name}`}
              >
          </input>

          <input
            id='imageUrl'
            type='text'
            placeholder={`${selectedBrew.imageUrl}`}
            onChange={(e) => setImageUrl(e.target.value)}
            value={`${selectedBrew.imageUrl}`}
              >        
          </input>

          <input
            id='notes'
            type='textbox'
            placeholder={`${selectedBrew.notes}`}
            onChange={(e) => setNotes(e.target.value)}
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
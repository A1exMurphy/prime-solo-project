import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';


function EditBrew() {
  const selectedBrew  = useSelector((store) => store.brewForUpdate)
  const history = useHistory();
  const dispatch = useDispatch();
console.log(selectedBrew[0], "store result for selected brew")

  const [beerName, setBeerName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [notes, setNotes] = useState('');

  //function to collect values from form inputs and dispatch to saga generator
  const onSubmit = () => {

    
    let newInputs = {
      beer_name: beerName,
      notes: notes,
      image: imageUrl
    }
    
    dispatch({
      type: "UPDATE_BREW",
      payload: newInputs
    });

    setBeerName('');
    setImageUrl('');
    setNotes('');

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
            value={beerName}
              >
          </input>

          <input
            id='imageUrl'
            type='text'
            placeholder={`${selectedBrew.imageUrl}`}
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
              >        
          </input>

          <input
            id='notes'
            type='textbox'
            placeholder={`${selectedBrew.notes}`}
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
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
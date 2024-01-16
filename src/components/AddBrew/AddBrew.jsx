import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';

function AddBrew() {
  const history = useHistory();
  const dispatch = useDispatch();


  const [beerName, setBeerName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [notes, setNotes] = useState('');
  //function to collect values from form inputs and dispatch to saga generator
  const onSubmit = () => {

    
    let newBeer = {
      beer_name: beerName,
      notes: notes,
      image: imageUrl
    }
    console.log(newBeer, "new beer")
    
    dispatch({
      type: "ADD_BREW",
      payload: newBeer
    });

    setBeerName('');
    setImageUrl('');
    setNotes('');

  }

  const presentationInputs =  () => {
    setBeerName('Smoke on the Water')
    setImageUrl('some image here')
    setNotes('A dark imperial stout with smokey notes')
  }

  const backToCollection = () => {
    history.push('/beercollection')
  }


  return (
    <div>
      <NavMenu />
      <center>
        <form onSubmit={onSubmit} onClick={presentationInputs}>
          <input
            id='beerName'
            type='text'
            placeholder='beer name'
            onChange={(e) => setBeerName(e.target.value)}
            value={beerName}
              >
          </input>

          <input
            id='imageUrl'
            type='text'
            placeholder='Image url' 
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
              >        
          </input>

          <input
            id='notes'
            type='textbox'
            placeholder='notes'
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
              >         
          </input>

          <button>
            Add to Collection
          </button>
        </form>
          <button onClick={backToCollection}>Back to Collection</button>
      </center>
    </div>
  );
}

export default AddBrew;
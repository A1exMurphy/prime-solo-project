import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddBrew() {
  const history = useHistory();

  const [beerName, setBeerName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [notes, setNotes] = useState('');
  //function to collect values from form inputs and dispatch to saga generator
  const onSubmit = () => {

    
    let newBeer = {
      beer_name: beerName,
      image: imageUrl,
      notes: notes
    }
    console.log(newBeer, "new beer")
    
    // dispatch({
    //   type: "ADD_BEER",
    //   payload: {newBeer}
    // });

    setBeerName('');
    setImageUrl('');
    setNotes('');

  }
  return (
    <div>

      <center>
        <form onSubmit={onSubmit}>
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
      </center>
    </div>
  );
}

export default AddBrew;
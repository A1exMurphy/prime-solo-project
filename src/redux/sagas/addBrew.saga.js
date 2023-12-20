import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//generator function to pass an axios POST to server
function* addBrew(action) {
    console.log(action.payload, 'action.payload')
    
    try {
        axios({
            method: 'POST',
            url: `/api/brew`,
            data: action.payload
        })
    yield put({
        type: 'FETCH_BREWS'
    })
} catch(error) {
    console.log(error, 'Error in POST route')
}};

function* addBrewSaga() {
    yield takeLatest('ADD_BREW', addBrew);
  }
  
  export default addBrewSaga;
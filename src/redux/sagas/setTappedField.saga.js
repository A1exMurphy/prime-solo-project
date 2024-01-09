import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//generator function to pass an axios GET request to server for all extant beers
function* setTappedStatus(action) {
    // console.log('start PUT request', action.payload)

    try {
        //Variables created from payload to more clearly communicate code function
        const selectedBeerID = action.payload.oneBrew.id;
        const selectedTappedStatus = {tapped: action.payload.tapped};
        // console.log(selectedTappedStatus, 'tapped status')


        const response = yield axios({
            method: 'PUT',
            url: `/api/tapped/${selectedBeerID}`,
            data: selectedTappedStatus,
        })
    yield put({
        type: 'SET_TAPPED',
        payload: response.data
    })

} catch(error) {
    console.log(error, 'Error in GET route')
}};


function* setTappedFieldSaga() {
    yield takeLatest('SET_TAPPED_STATUS', setTappedStatus);

  }
  
  export default setTappedFieldSaga;
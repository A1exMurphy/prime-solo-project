import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//generator function to pass an axios GET request to server for all extant beers
function* setTappedStatus(action) {
    // console.log('start PUT request', action.payload)

    try {
        const selectedBeerID = action.payload.oneBrew.id;
        const selectedTappedStatus = action.payload.tapped;
        const response = yield axios({
            method: 'PUT',
            url: `/api/tapped/${selectedBeerID}`,
            data: action.payload,
        })
    yield put({
        type: 'SET_TAPPED',
        payload: response.data
    })

} catch(error) {
    console.log(error, 'Error in GET route')
}};

function* setTappedFalse() {
    console.log('start PUT request', payload)

    try {
        const response = yield axios({
            method: 'PUT',
            url: `/api/tapped/${action.payload}`,
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
    yield takeLatest('SET_TAPPED_FALSE', setTappedFalse);

  }
  
  export default setTappedFieldSaga;
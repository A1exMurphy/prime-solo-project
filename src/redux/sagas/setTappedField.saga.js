import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//generator function to pass an axios GET request to server for all extant beers
function* setTappedTrue() {
    console.log('start PUT request')

    try {
        const response = yield axios({
            method: 'PUT',
            url: `/api/brew/${action.payload}`,
        })
    yield put({
        type: 'SET_TAPPED',
        payload: response.data
    })

} catch(error) {
    console.log(error, 'Error in GET route')
}};

function* setTappedFalse() {
    // console.log('start PUT request')

    try {
        const response = yield axios({
            method: 'PUT',
            url: `/api/brew${action.payload}`,
        })
    yield put({
        type: 'SET_TAPPED',
        payload: response.data
    })

} catch(error) {
    console.log(error, 'Error in GET route')
}};

function* setTappedFieldSaga() {
    yield takeLatest('SET_TAPPED_TRUE', setTappedTrue);
    yield takeLatest('SET_TAPPED_FALSE', setTappedFalse);

  }
  
  export default setTappedFieldSaga;
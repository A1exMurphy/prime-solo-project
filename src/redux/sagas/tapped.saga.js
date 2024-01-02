import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//generator function to pass an axios GET request to server for 
function* getTapped() {
    console.log('start GET request')

    try {
        const response = yield axios({
            method: 'GET',
            url: `/api/tapped`,
        })
    yield put({
        type: 'SET_TAPPED',
        payload: response.data
    })

} catch(error) {
    console.log(error, 'Error in GET route')
}};

function* getTappedSaga() {
    yield takeLatest('GET_TAPPED', getTapped);
  }
  
  export default getTappedSaga;
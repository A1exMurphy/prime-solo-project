import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//generator function to pass an axios POST to server
function* getCollection() {
    // console.log('start GET request')

    try {
        const response = yield axios({
            method: 'GET',
            url: `/api/brew`,
        })
    yield put({
        type: 'SET_COLLECTION',
        payload: response.data
    })

} catch(error) {
    console.log(error, 'Error in GET route')
}};

function* getCollectionSaga() {
    yield takeLatest('GET_COLLECTION', getCollection);
  }
  
  export default getCollectionSaga;
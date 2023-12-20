import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//generator function to pass an axios POST to server
function* getCollection() {
    
    try {
        axios({
            method: 'GET',
            url: `/api/brew`,
        })
    yield put({
        type: 'FETCH_BREWS'
    })
} catch(error) {
    console.log(error, 'Error in GET route')
}};

function* getCollectionSaga() {
    yield takeLatest('GET_COLLECTION', getCollection);
  }
  
  export default getCollectionSaga;
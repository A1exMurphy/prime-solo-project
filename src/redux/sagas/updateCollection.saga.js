import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//generator function to pass an axios GET request to server for all extant beers
function* removeFromCollection(action) {
    console.log('start DELETE request')
    const selectedBeerID = action.payload;


    try {
        const response = yield axios({
            method: 'DELETE',
            url: `/api/brew/${selectedBeerID}`,
        })
    yield put({
        type: 'GET_COLLECTION',
        payload: response.data
    })

} catch(error) {
    console.log(error, 'Error in GET route')
}};

function* getInputsFromCollection(action)  {
    console.log(action.payload, 'requesting inputs for one beer')
    const selectedBeerID = action.payload;


    try {
        const response = yield axios({
            method: 'GET',
            url: `/api/updatebrew/${selectedBeerID}`,
        })
    yield put({
        type: 'SET_BREW_FOR_UPDATE',
        payload: response.data
    })

} catch(error) {
    console.log(error, 'Error in GET route')
}};

function* updateBeerInCollection(action) {
    console.log('start PUT request for beer update')
    const selectedBeerID = action.payload;
    

    try {
        const response = yield axios({
            method: 'PUT',
            url: `/api/brew/${selectedBeerID}`,
        })
    yield put({
        type: 'GET_COLLECTION',
        payload: response.data
    })

} catch(error) {
    console.log(error, 'Error in PUT route')
}};


function* updateCollectionSaga() {
    yield takeLatest('REMOVE_FROM_COLLECTION', removeFromCollection);
    yield takeLatest('GET_INPUTS_FROM_COLLECTION', getInputsFromCollection);
  }
  
  export default updateCollectionSaga;
const brewsReducer = (state = {}, action) => {
  // console.log(action.payload, 'query results at store')
    switch (action.type) {
      case 'SET_COLLECTION':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default brewsReducer;
  
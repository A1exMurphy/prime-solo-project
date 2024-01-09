const brewForUpdate = (state = [], action) => {
    console.log(action.payload, 'query results at store')
      switch (action.type) {
        case 'SET_BREW_FOR_UPDATE':
          return action.payload;
        default:
          return state;
      }
    };
  
    export default brewForUpdate;
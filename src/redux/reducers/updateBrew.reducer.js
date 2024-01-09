const brewForUpdate = (state = {}, action) => {
    console.log(action.payload, 'query results at store')
      switch (action.type) {
        case 'SET_BREW_FOR_UPDATE':
          return {...state, 
            id: action.payload.id,
            beer_name: action.payload.beer_name,
            image: action.payload.image,
            notes: action.payload.notes
            }
        default:
          return state;
      }
    };
  
    export default brewForUpdate;
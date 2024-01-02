
const tappedReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TAPPED':
        return action.payload;
      default:
        return state;
    }    
  };

export default tappedReducer;
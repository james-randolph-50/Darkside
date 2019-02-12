export default (state = [], action) => {
    switch(action.type) {
      case 'GET_SNOWBOARDS_SUCCESS':
        return action.snowboards;
  
      case 'CREATE_SNOWBOARD_SUCCESS':
        return state.concat(action.snowboard);
  
      default: 
        return state;
    }
  }
const MovieReducer = (state: any, action: any) => {
    if (action.type === "SET_MOVIE_TITLE") {
      return {
        ...state,
        pageTitle: action.bodyReq
      };
    }
    return state;
  };
  
  export default MovieReducer;
  
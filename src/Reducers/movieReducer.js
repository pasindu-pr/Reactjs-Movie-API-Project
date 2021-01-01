const initialState = {
  trendingMovies: [],
  upcommingMovies: [],
  nowplayingMovies: [],
  searchedMovies: [],
};

//Reduer
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        trendingMovies: action.payload.trending,
        upcommingMovies: action.payload.upcomming,
        nowplayingMovies: action.payload.nowPlaying,
      };

    case "FETCH_SEARCHED_MOVIES":
      return {
        ...state,
        searchedMovies: action.payload.searched,
      };

    default:
      return { ...state };
  }
};

export default movieReducer;

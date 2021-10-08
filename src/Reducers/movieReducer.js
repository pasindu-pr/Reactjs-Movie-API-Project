const initialState = {
  trendingMovies: [],
  upcommingMovies: [],
  nowplayingMovies: [],
  searchedMovies: [],
};

//Reduer
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_REQUEST":
      return {
        loading: true,
        ...state,
      };

    case "FETCH_MOVIES":
      return {
        loading: false,
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

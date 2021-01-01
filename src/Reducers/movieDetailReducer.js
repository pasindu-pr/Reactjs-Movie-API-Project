const initialState = {
  clickedMovie: {
    genres: [],
    production_companies: [],
  },
};

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_DETAIL":
      return { ...state, clickedMovie: action.payload.movieDetails };

    default:
      return { ...state };
  }
};

export default movieDetailReducer;

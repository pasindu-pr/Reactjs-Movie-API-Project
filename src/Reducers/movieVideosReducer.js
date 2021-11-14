const movieVideosReducer = (state = { results: [] }, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_VIDEO_REQUEST":
      return { loading: true, ...state };

    case "FETCH_MOVIE_VIDEO":
      return {
        loading: false,
        videos: action.payload.videos,
      };

    default:
      return { ...state };
  }
};

export default movieVideosReducer;

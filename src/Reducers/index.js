import movieReducer from "./movieReducer";
import searchBarReducer from "./searchBarReducer";
import movieDetailReducer from "./movieDetailReducer";
import { combineReducers } from "redux";
import movieVideosReducer from "./movieVideosReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  show_search: searchBarReducer,
  movieDetail: movieDetailReducer,
  movideVideos: movieVideosReducer,
});

export default rootReducer;

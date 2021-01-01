import movieReducer from "./movieReducer";
import searchBarReducer from "./searchBarReducer";
import movieDetailReducer from "./movieDetailReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movies: movieReducer,
  show_search: searchBarReducer,
  movieDetail: movieDetailReducer,
});

export default rootReducer;

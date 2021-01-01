import axios from "axios";
import { search_movie_url } from "../api";

export const search_movie_action = (search_term) => async (dispatch) => {
  const searchedMovies = await axios.get(search_movie_url(search_term));
  dispatch({
    type: "FETCH_SEARCHED_MOVIES",
    payload: {
      searched: searchedMovies.data.results,
    },
  });
};

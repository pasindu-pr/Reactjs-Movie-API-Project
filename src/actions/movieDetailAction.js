import axios from "axios";
import { movie_detail_url } from "../api";

export const movieDetailAction = (movie_id) => async (dispatch) => {
  const movieDetails = await axios.get(movie_detail_url(movie_id));

  dispatch({
    type: "FETCH_MOVIE_DETAIL",
    payload: {
      movieDetails: movieDetails.data,
    },
  });
};

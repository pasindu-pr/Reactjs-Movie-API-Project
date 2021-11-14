import axios from "axios";
import { movie_video_url } from "../api";

export const movieVideosAction = (movie_id) => async (dispatch) => {
  //Get Loading State
  dispatch({
    type: "FETCH_MOVIE_VIDEO_REQUEST",
  });

  const movieDetails = await axios.get(movie_video_url(movie_id));

  dispatch({
    type: "FETCH_MOVIE_VIDEO",
    payload: {
      videos: movieDetails.data.results,
    },
  });
};

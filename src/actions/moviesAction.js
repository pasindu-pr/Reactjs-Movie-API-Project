import axios from "axios";
import { trending_movies_url, now_playing_url, upcomming_url } from "../api";

export const movieAction = () => async (dispatch) => {
  //Get Movies
  const trendingMovies = await axios.get(trending_movies_url());
  const nowPlayingMovies = await axios.get(now_playing_url());
  const upcommingMovies = await axios.get(upcomming_url());

  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      trending: trendingMovies.data.results,
      nowPlaying: nowPlayingMovies.data.results,
      upcomming: upcommingMovies.data.results,
    },
  });
};

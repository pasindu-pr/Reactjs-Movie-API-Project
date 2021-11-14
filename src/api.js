//API KEY
const app_api_key = process.env.REACT_APP_MOVIE_API_KEY;

// Base URL
const base_url = `https://api.themoviedb.org/3/`;

//Trending Movies url
const trending = `movie/popular?api_key=${app_api_key}&language=en-US&page=1
`;

//Now Playing Movies url
const now_playing = `movie/now_playing?api_key=${app_api_key}&language=en-US&page=1`;

//upcomming movies url
const upcomming = `movie/upcoming?api_key=${app_api_key}&language=en-US&page=1`;

//Exporting urls as functions
export const trending_movies_url = () => `${base_url}${trending}`;
export const now_playing_url = () => `${base_url}${now_playing}`;
export const upcomming_url = () => `${base_url}${upcomming}`;
export const movie_detail_url = (movie_id) =>
  `${base_url}movie/${movie_id}?api_key=${app_api_key}`;
export const search_movie_url = (search_term) =>
  `${base_url}search/multi?api_key=${app_api_key}&query=${search_term}&page=1&include_adult=false`;
export const movie_video_url = (movie_id) =>
  `${base_url}movie/${movie_id}/videos?api_key=${app_api_key}&language=en-US&append_to_response=videos&site=%22YouTube%22`;
export const movie_cast_url = (movie_id) =>
  `${base_url}movie/${movie_id}/credits?api_key=${app_api_key}&language=en-US`;
export const similar_movies_url = (movie_id) =>
  `${base_url}movie/${movie_id}/similar?api_key=${app_api_key}&language=en-US`;

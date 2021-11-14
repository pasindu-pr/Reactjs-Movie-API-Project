import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";
import { movie_cast_url, similar_movies_url } from "../api";
import FilmCard from "../components/FilmCard";
import Footer from "../components/Footer";
import Collections from "../shared/collectionslayout";

function MovieDetail() {
  const { clickedMovie } = useSelector((state) => state.movieDetail);
  const movieVideos = useSelector((state) => state.movideVideos);
  const [movieCast, setMovieCast] = useState();
  const [similarMovies, setSimilarMovies] = useState();

  const starRating = Math.floor(Number(clickedMovie.vote_average) / 2) || 1;

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(movie_cast_url(id));
      const { data: movieCastData } = await axios.get(similar_movies_url(id));
      setMovieCast(data.cast);
      setSimilarMovies(movieCastData.results);
    };

    fetchData();
    // window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Page>
        {clickedMovie && movieVideos && (
          <>
            <Header>
              <TitleRatingContainer>
                <Title>
                  <h1>{clickedMovie.original_title}</h1>
                </Title>

                <Rating>
                  {[...Array(starRating)].map((i, index) => (
                    <i key={index} className="fa-solid fa-star"></i>
                  ))}

                  <h5>(&nbsp; {clickedMovie.vote_average} &nbsp;)</h5>
                </Rating>
              </TitleRatingContainer>

              <Genres>
                {clickedMovie.genres.map((genre) => (
                  <div key={genre.id}>
                    <h5 className="genre">{genre.name}</h5>
                  </div>
                ))}
              </Genres>
            </Header>

            <div>
              <ImageVideoContainer>
                <Image>
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${clickedMovie.backdrop_path}`}
                    alt=""
                  />
                </Image>

                <iframe
                  width="420"
                  height="315"
                  title="Moviepack Videos"
                  src={`https://www.youtube.com/embed/${
                    movieVideos.videos && movieVideos.videos[0].key
                  }`}
                ></iframe>
              </ImageVideoContainer>

              <MovieDetailsContainer>
                <MovieDetails>
                  <Description>
                    <h3> Storyline: </h3>
                    <p> {clickedMovie.overview} </p>

                    <hr />

                    <p className="release-date">
                      Release Date :{clickedMovie.release_date}
                    </p>

                    <hr />

                    <p className="release-date">
                      {" "}
                      Status : {clickedMovie.status}{" "}
                    </p>

                    <hr />

                    <p className="release-date" style={{ display: "inline" }}>
                      Producers: &nbsp;
                    </p>
                    {clickedMovie.production_companies.map((company) => (
                      <p
                        className="release-date"
                        style={{ display: "inline-block" }}
                        key={company.id}
                      >
                        {company.name}
                      </p>
                    ))}
                    <hr />
                    <p className="release-date">
                      {" "}
                      Budget : $ {clickedMovie.budget}{" "}
                    </p>
                    <hr />

                    <p className="release-date">
                      Revenue : $ {clickedMovie.revenue}
                    </p>

                    <hr />

                    <p className="release-date">
                      Popularity : {clickedMovie.popularity}
                    </p>

                    <hr />
                  </Description>
                </MovieDetails>

                <WatchListContainer>
                  <button> Add to watchlist </button>
                </WatchListContainer>
              </MovieDetailsContainer>

              <CastContainer>
                <div className="title-container">
                  <h3 className="title"> Cast And Crew </h3>
                  <p> Cast and crew of {clickedMovie.original_title} </p>
                </div>

                <Collections>
                  {movieCast &&
                    movieCast.slice(0, 12).map((charcter, index) => (
                      <Character key={index}>
                        <img
                          src={`https://image.tmdb.org/t/p/w185${charcter.profile_path}`}
                          alt={`moviepack_casts_${charcter.name}`}
                        />
                        <h3> {charcter.name} </h3>
                        <p> {charcter.character}</p>
                      </Character>
                    ))}
                </Collections>
              </CastContainer>

              <Category>
                <div className="title-container">
                  <h3 className="title"> Similar Movies </h3>
                  <p> Similar movies to {clickedMovie.original_title} </p>
                </div>
                <Collections>
                  {similarMovies &&
                    similarMovies
                      .slice(0, 6)
                      .map((movie) => (
                        <FilmCard
                          key={movie.id}
                          id={movie.id}
                          name={movie.original_title}
                          rating={movie.vote_average}
                          poster={movie.poster_path}
                        />
                      ))}
                </Collections>
              </Category>
            </div>
          </>
        )}
      </Page>
      <Footer />
    </>
  );
}

const Category = styled(motion.div)`
  flex-direction: column;
  padding-top: 2rem;

  .title-container {
    border-left: 5px solid #ffc400;
    margin-left: 1rem;
    margin-bottom: 2rem;

    h3 {
      font-size: 1.8rem;
      margin-left: 10px;
    }

    p {
      font-size: 0.8rem;
      margin-left: 10px;
    }
  }
`;

const CastContainer = styled(motion.div)`
  min-height: 60vh;
  margin: 2rem 0;

  .title-container {
    border-left: 5px solid #ffc400;
    margin-left: 1rem;
    margin-bottom: 2rem;

    h3 {
      font-size: 1.8rem;
      margin-left: 10px;
    }

    p {
      font-size: 0.8rem;
      margin-left: 10px;
    }
  }
`;

const Character = styled(motion.div)`
  width: 11.8rem;
  img {
    object-fit: contain;
  }

  p,
  h3 {
    text-align: center;
  }
`;

const Page = styled(motion.div)`
  padding: 10px 2rem;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  background-color: #1b1b1b;
  padding-bottom: 1rem;
  hr {
    margin-top: 12px;
    border-bottom: none;
    border-top: 1px solid rgba(250, 250, 250, 0.2);
  }
  .website {
    text-align: center;
    margin-top: 10px;
  }

  @media (max-width: 1200px) {
    padding: 10px 10px;
  }
`;

const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;

    h1 {
      text-align: center;
    }
  }
`;

const TitleRatingContainer = styled(motion.div)``;

const Title = styled(motion.div)`
  display: inline;
  .back-icon {
    cursor: pointer;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    color: #ffc400;
  }
  padding-top: 10px;
  text-align: left;
`;

const Rating = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 8px 0;

  i {
    color: #ffc400;
    margin-right: 1rem;
  }

  @media screen and (max-width: 420px) {
    justify-content: center;
    margin: 1rem 0;
  }
`;

const Genres = styled(motion.div)`
  display: flex;
  align-items: center;

  div {
    border: 1px solid #ffc400;
    margin: 0 1rem;
    padding: 4px 8px;
    border-radius: 15px;
  }

  h5 {
    color: #ffc400;
  }
`;

const ImageVideoContainer = styled(motion.div)`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4vw;

  img {
    width: 50vw;
    height: 50vh;
    object-fit: cover;
  }

  iframe {
    width: 50vw;
    height: 50vh;
    border: none;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 3vh;
    img {
      width: 100vw;
    }

    iframe {
      width: 100vw;
    }
  }
`;

const Image = styled(motion.div)`
  width: 50vw;

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

const MovieDetailsContainer = styled(motion.div)`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const MovieDetails = styled(motion.div)`
  width: 50vw;
  @media (max-width: 1200px) {
    margin-top: 2rem;
    width: 100vw;
  }
`;

const WatchListContainer = styled(motion.div)`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 50%;
    height: 60px;
    background: rgba(205, 205, 205, 0.06);
    border: none;
    outline: none;
    border-radius: 8px;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    width: 100vw;
    margin-top: 2rem;

    button {
      width: 100%;
    }
  }
`;

const Description = styled(motion.div)`
  h3 {
    margin-bottom: 1rem;
  }
  p {
    text-align: left;
    width: 98%;
  }

  .release-date {
    margin-top: 1rem;
  }
`;

export default MovieDetail;

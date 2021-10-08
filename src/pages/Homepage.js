import React, { useEffect } from "react";
import { movieAction } from "../actions/moviesAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import FilmCard from "../components/FilmCard";

function Homepage() {
  const dispatch = useDispatch();
  const { nowplayingMovies, trendingMovies, upcommingMovies, searchedMovies } =
    useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(movieAction());
  }, [dispatch]);

  return (
    <div>
      <MainPage>
        {searchedMovies.length ? (
          <Category transition={{ duration: 0.5 }}>
            <h3 className="title"> Searched Movies </h3>
            <hr />
            <Collections>
              {searchedMovies.map((movie) => (
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
        ) : (
          ""
        )}

        <Category transition={{ duration: 0.5 }}>
          <div className="title-container">
            <h3 className="title"> Now Playing Movies </h3>
            <p> Now playing movies all over the world </p>
          </div>
          <Collections>
            {nowplayingMovies.map((movie) => (
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
        <Category>
          <div className="title-container">
            <h3 className="title"> Trending Movies </h3>
            <p> Trending movies all over the world </p>
          </div>
          <Collections>
            {trendingMovies.map((movie) => (
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
        <Category>
          <div className="title-container">
            <h3 className="title"> Upcomming Movies </h3>
            <p> Upcomming movies all over the world </p>
          </div>
          <Collections>
            {upcommingMovies.map((movie) => (
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
      </MainPage>
    </div>
  );
}

const MainPage = styled(motion.div)`
  min-height: 100vh;
  background-color: #1b1b1b;

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

const Category = styled(motion.div)`
  flex-direction: column;
  padding-top: 2rem;
`;

const Collections = styled(motion.div)`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
  grid-gap: 2.5rem;
  justify-items: center;

  @media (max-width: 1450px) {
    grid-template-columns: repeat(5, max(50px, 1fr));
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(50px, 1fr));
  }

  @media (max-width: 987px) {
    grid-template-columns: repeat(3, minmax(50px, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(50px, 1fr));
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(50px, 1fr));
    grid-gap: 1rem;
  }
`;

export default Homepage;

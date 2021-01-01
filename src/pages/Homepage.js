import React, { useEffect } from "react";
import { movieAction } from "../actions/moviesAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import FilmCard from "../components/FilmCard";

function Homepage() {
  const dispatch = useDispatch();
  const {
    nowplayingMovies,
    trendingMovies,
    upcommingMovies,
    searchedMovies,
  } = useSelector((state) => state.movies);

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
          <h3 className="title"> Now Playing Movies </h3>
          <hr />
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
          <h3 className="title"> Trending Movies </h3>
          <hr />
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
          <h3 className="title"> Upcomming Movies </h3>
          <hr />
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
`;

const Category = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  hr {
    width: 8rem;
    height: 0.09rem;
    border: none;
    border-top: 3px solid #ffc400;
    margin-top: 0.3rem;
  }
`;

const Collections = styled(motion.div)`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
  grid-gap: 4rem;

  @media (max-width: 1450px) {
    grid-template-columns: repeat(4, minmax(50px, 1fr));
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

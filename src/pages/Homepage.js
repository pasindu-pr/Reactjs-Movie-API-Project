import React, { useEffect, useState } from "react";
import { movieAction } from "../actions/moviesAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import FilmCard from "../components/FilmCard";
import Collections from "../shared/collectionslayout";

function Homepage({
  searchTerm,
  latestItemRef,
  nowPlayingItemRef,
  trendingItemRef,
}) {
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
            <div className="title-container">
              <h3 className="title"> Search Results </h3>
              <p> Search Results for {searchTerm} </p>
            </div>
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

        <Category ref={nowPlayingItemRef} transition={{ duration: 0.5 }}>
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
        <Category ref={trendingItemRef}>
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
        <Category ref={latestItemRef}>
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

export default Homepage;

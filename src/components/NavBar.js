import React from "react";
import logo from "../img/logo.png";
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { show_search_bar } from "../actions/searchBarAction";

function NavBar({ latestItemRef, nowPlayingItemRef, trendingItemRef }) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(show_search_bar());
  };

  const scrollIntoViews = (elementRef) => {
    elementRef.current.scrollIntoView();
  };

  return (
    <Bar>
      <img src={logo} alt="moviepac-logo" />
      <div>
        <p
          onClick={() => {
            scrollIntoViews(nowPlayingItemRef);
          }}
        >
          Now Playing Movies
        </p>
        <p
          onClick={() => {
            scrollIntoViews(trendingItemRef);
          }}
        >
          Trending Movies
        </p>

        <p
          onClick={() => {
            scrollIntoViews(latestItemRef);
          }}
        >
          Upcomming Movies
        </p>

        <i onClick={clickHandler} class="fa-solid fa-magnifying-glass"></i>
      </div>
    </Bar>
  );
}

const Bar = styled(motion.div)`
  max-width: 100vw;
  height: 10vh;
  background-color: #1b1b1b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  padding: 0 10px;
  div {
    display: flex;
    align-items: center;
  }
  img {
    width: 150px;
  }

  p {
    font-size: 0.8rem;
    margin-left: 1.5rem;
    cursor: pointer;
  }

  i {
    margin-left: 1.5rem;
    font-size: "20px";
    color: "#ffc400";
    cursor: pointer;
  }
`;

export default NavBar;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { search_movie_action } from "../actions/movieSearchAction";
import { searchBarVariant } from "../transitions";
import { show_search_bar } from "../actions/searchBarAction";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

function Search({ searchTerm, setSearchTerm }) {
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const clickHandler = () => {
    const urlEncodedSearch = encodeURI(searchTerm);
    dispatch(search_movie_action(urlEncodedSearch));
    handleSearchCloseClick();
  };

  useEffect(() => {
    disableBodyScroll(document);
    return () => {
      enableBodyScroll(document);
    };
  }, []);

  const handleSearchCloseClick = () => {
    dispatch(show_search_bar());
  };

  return (
    <OuterContainer>
      <AnimatePresence exitBeforeEnter>
        <SearchContanier
          animate="animated"
          initial="initial"
          exit="exit"
          variants={searchBarVariant}
        >
          <InputContainer>
            <i
              onClick={handleSearchCloseClick}
              class="fa-solid fa-circle-xmark"
            ></i>
            <input
              type="text"
              onChange={changeHandler}
              placeholder="Enter Movie Name..."
              value={searchTerm}
            />
            <button onClick={clickHandler}> Search </button>
          </InputContainer>
        </SearchContanier>
      </AnimatePresence>
    </OuterContainer>
  );
}

const OuterContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
`;

const SearchContanier = styled(motion.div)`
  background-color: #1b1b1b;
  width: 40%;
  height: 20%;
  top: 50%;
  left: 50%;

  z-index: 2;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  input {
    width: 25rem;
    height: 3rem;
    border: none;
    outline: none;
    border-radius: 4px;
    padding-left: 10px;
    background: rgba(92, 92, 92, 0.301);
  }

  input::placeholder {
    color: white;
  }

  button {
    width: 7rem;
    height: 3rem;
    border: none;
    outline: none;
    background: #ffc400;
    border-radius: 4px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 20px;
    cursor: pointer;
  }
`;

export default Search;

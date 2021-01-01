import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { search_movie_action } from "../actions/movieSearchAction";
import { filmCardVariant } from "../transitions";

function Search() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const clickHandler = () => {
    const urlEncodedSearch = encodeURI(searchTerm);
    dispatch(search_movie_action(urlEncodedSearch));
    setSearchTerm("");
  };

  return (
    <SearchContanier>
      <motion.div
        variants={filmCardVariant}
        animate="animated"
        initial="initial"
      >
        <input
          type="text"
          onChange={changeHandler}
          placeholder="Enter Movie Name..."
          value={searchTerm}
        />
        <button onClick={clickHandler}> Search </button>
      </motion.div>
    </SearchContanier>
  );
}

const SearchContanier = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b1b1b;
  padding-top: 3rem;
  input {
    width: 18rem;
    height: 2rem;
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
    width: 4rem;
    height: 2rem;
    border: none;
    outline: none;
    background: #ffc400;
    border-radius: 4px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export default Search;

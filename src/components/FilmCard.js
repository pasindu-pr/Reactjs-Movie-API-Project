import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import star from "../img/star.svg";
import { Link } from "react-router-dom";
import { filmCardPopup } from "../transitions";

//Redux Action
import { useDispatch } from "react-redux";
import { movieDetailAction } from "../actions/movieDetailAction";

function FilmCard({ id, name, rating, poster }) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(movieDetailAction(id));
  };

  return (
    <Outer>
      <Filmcard variants={filmCardPopup} initial="hidden" animate="show">
        <div className="image">
          <img src={`https://image.tmdb.org/t/p/w185${poster}`} alt={name} />
        </div>
        <Title>
          <h5> {name} </h5>
        </Title>
        <Rating>
          <img src={star} alt="" />
          <p> {rating} </p>
        </Rating>
        <Link to={`/movie/${id}`}>
          <button onClick={clickHandler}> More Details </button>
        </Link>
      </Filmcard>
    </Outer>
  );
}

const Outer = styled.div`
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: all 1s ease;
  }
`;

const Filmcard = styled(motion.div)`
  background: rgb(18, 18, 18);
  border-radius: 0.6rem;
  width: 11.8rem;
  height: 25rem;
  overflow: hidden;
  text-align: center;
  opacity: 1;
  button {
    margin-top: 10px;
    background: rgba(92, 92, 92, 0.301);
    border: none;
    outline: none;
    height: 1.8rem;
    width: 8rem;
    color: #5985ff;
    border-radius: 0.4rem;
    cursor: pointer;
    :hover {
      background: rgba(219, 219, 219, 0.301);
      color: white;
      transition: 1s all;
    }
  }
`;

const Title = styled(motion.div)`
  h5 {
    margin-top: 0.7rem;
    font-size: 14px;
  }
`;

const Rating = styled(motion.div)`
  img {
    width: 10px;
    margin-top: 1rem;
    margin-right: 10px;
    display: inline;
  }
  p {
    display: inline-block;
    font-size: 12px;
  }
`;

export default FilmCard;

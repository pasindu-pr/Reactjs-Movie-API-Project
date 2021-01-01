import React from "react";
import logo from "../img/logo.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
//Redux
import { useDispatch } from "react-redux";
import { show_search_bar } from "../actions/searchBarAction";

function NavBar() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(show_search_bar());
  };

  return (
    <Bar>
      <div>
        <img src={logo} alt="" />
        <IconButton onClick={clickHandler}>
          <SearchIcon style={{ fill: "#ffc400" }} />
        </IconButton>
      </div>
    </Bar>
  );
}

const Bar = styled(motion.div)`
  max-width: 100vw;
  height: 45px;
  background-color: #1b1b1b;
  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  img {
    width: 80px;
  }
`;

export default NavBar;

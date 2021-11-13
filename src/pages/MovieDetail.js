import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import star from "../img/star.svg";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import { useHistory } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

function MovieDetail() {
  const { clickedMovie } = useSelector((state) => state.movieDetail);
  const history = useHistory();

  const clickHandler = () => {
    history.push("/");
  };

  return (
    <Page>
      <div>
        <Image>
          {/* <img
        src="https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg"
        alt=""
      /> */}
          <img
            src={`https://image.tmdb.org/t/p/w1280${clickedMovie.backdrop_path}`}
            alt=""
          />
        </Image>

        <Title>
          <h1>
            <IconButton onClick={clickHandler}>
              <ArrowBackIosSharpIcon
                style={{ fill: "#ffc400" }}
                className="back-icon"
              />
            </IconButton>
            {clickedMovie.original_title}
          </h1>
        </Title>
        <Genres>
          {clickedMovie.genres.map((genre) => (
            <h5 key={genre.id}> {genre.name} &nbsp;</h5>
          ))}

          <h5>
            |&nbsp; &nbsp; <img src={star} alt="rating-star" />{" "}
            {clickedMovie.vote_average}{" "}
          </h5>
          <hr />
        </Genres>
        <Description>
          <p> {clickedMovie.overview} </p>
          <p className="release-date">
            {" "}
            Release Date :{clickedMovie.release_date}{" "}
          </p>
          <p className="release-date"> Status : {clickedMovie.status} </p>
        </Description>
        <Companies>
          <h3> Producers: </h3>
          {clickedMovie.production_companies.map((company) => (
            <h5 key={company.id}> {company.name} </h5>
          ))}
        </Companies>
        <Other>
          <h5> Budget : $ {clickedMovie.budget} </h5>
          <h5> Revenue : $ {clickedMovie.revenue} </h5>
          <h5> Popularity : {clickedMovie.popularity} </h5>
        </Other>
        <hr />
        <h5 className="website">
          {" "}
          Official Website :{" "}
          <a href="www.tenet.com"> {clickedMovie.homepage} </a>{" "}
        </h5>
      </div>
    </Page>
  );
}

const Page = styled(motion.div)`
  min-height: 100vh;
  background-color: #1b1b1b;
  padding-bottom: 1rem;
  hr {
    margin-top: 12px;
    border-bottom: none;
    border-top: 1px solid #ffc400;
  }
  .website {
    text-align: center;
    margin-top: 10px;
  }
`;

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
  text-align: center;
`;

const Genres = styled(motion.div)`
  text-align: center;
  h5 {
    display: inline;
    margin-top: 10px;
  }
  hr {
    margin-top: 12px;
    border-bottom: none;
    border-top: 1px solid #ffc400;
  }
  img {
    width: 10px;
    margin-top: 1rem;
    margin-right: 10px;
    display: inline;
  }
`;

const Image = styled(motion.div)`
  img {
    width: 100vw;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  padding: 1rem 10rem;
  p {
    text-align: center;
  }

  .release-date {
    margin-top: 1rem;
    color: #ffc400;
  }

  @media (max-width: 550px) {
    padding: 1rem 2rem;
  }
`;

const Companies = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h5 {
    margin-top: 8px;
    font-family: "Montserrat";
  }
`;

const Other = styled(motion.div)`
  text-align: center;
  margin-top: 10px;
  p {
    font-family: "Roboto";
  }
`;

export default MovieDetail;

import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { filmCardPopup } from "../transitions";

function Carousel() {
  const { trendingMovies } = useSelector((state) => state.movies);

  return (
    <Page>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={trendingMovies.length}
        isPlaying={true}
        infinite={true}
      >
        <motion.div variants={filmCardPopup} initial="hidden" animate="show">
          <Slider style={{ zIndex: 1 }}>
            {trendingMovies.map((movie) => (
              <Slide index={movie.id} key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                  style={{ width: "100%" }}
                  alt={movie.original_title}
                />
                <h5> {movie.original_title} </h5>
              </Slide>
            ))}
          </Slider>
        </motion.div>
      </CarouselProvider>
    </Page>
  );
}

const Page = styled(motion.div)`
  background-color: #1b1b1b;
  padding: 0 0 2rem 0;
`;

export default Carousel;

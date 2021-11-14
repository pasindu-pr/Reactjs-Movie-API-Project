import { motion } from "framer-motion";
import styled from "styled-components";

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

export default Collections;

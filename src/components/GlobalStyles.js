import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding:0;
    color: white;
    font-family: "Roboto", sans-serif;
    scroll-behavior: smooth;
}


html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }

        &::-webkit-scrollbar-thumb{
            background-color: #1b1b1b;
            background: #ffc400;
        }
    }


h3{
    font-family : "Montserrat", sans-serif;
}
`;

export default GlobalStyles;

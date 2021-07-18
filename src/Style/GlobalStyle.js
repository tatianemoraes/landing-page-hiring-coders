import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 5px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .carousel .slide img {
    width: auto;
  }
`;
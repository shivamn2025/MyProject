import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family:'Nunito',sans-serif;
}
html{
    font-size:62.5%
}
body{
   background-image: url('https://plexcollectionposters.com/images/2021/05/16/background-images-for-login-page3bc68c53b0db224b.jpg');
   background-size: cover; /* Ensures the image covers the entire section */
   background-position: center; /* Centers the background image */
   background-repeat: no-repeat; /* Prevents repeating of the background image */
     
  }
  
h1{
    font-size:2.6rem;
  }
  
  p{
    font-size: 1.6rem;
  }
  

`;
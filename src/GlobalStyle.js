import { createGlobalStyle } from 'styled-components';
import bg from './assets/pictures/bg.83584e25.png';
const GlobalStyle = createGlobalStyle`
:root{
  --primary-clr:#FFC500;
  --primary-clr-alt: #fd7e14;
  --title-clr: #293641;
  --title-clr-alt: #aeadaa;
  --title-clr-alt2: #707070;
}
::selection{
  background-color: var(--primary-clr);
  color: #293641;
}
h1,h2,h3,h4,h5{
  margin: 0;
  padding: 0;
}
.container{
    max-width: 1300px;
    width: 99%;
    margin: 0 auto;
}


*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background-image: url(${bg});
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
}

a{
  text-decoration: none;
  color: var(--title-clr);
}

ul{
  list-style: none;
}

img{
  max-width: 100%;
}

`

export default GlobalStyle;
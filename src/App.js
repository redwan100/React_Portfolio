import SideBar from './components/SideBar';
import GlobalStyle from './GlobalStyle';
import Router from './router/Router';
import styled from 'styled-components';
import Footer from './components/Footer';

const AppStyle = styled.div`
  padding: 3rem 0;
  .wrapper{
    display: flex;
    gap: 2rem;
  }
  .left{
    background-color: white;
    width: 400px;
    height: 100%;
    border-radius: 8px;
    /* overflow: hidden; */
    padding: 1rem  0;
    flex: 1;
  }

  .right{
    flex: 3;
  }

  .footer{
    margin-top: 3rem;
    margin-bottom: -1rem;
  }
  @media screen and (max-width: 1024px){
    .wrapper{
      flex-direction: column;
    }
    .left{
      flex: 1;
      margin: auto;
      display: block;
      width: 100%;
    }
    .right{
      flex: 1;
    }
  }
`

function App() {
  return (
   <>
     <GlobalStyle />
   <AppStyle>
      <div className="container">
          <div className="wrapper">
            <div className="left">
              <SideBar />
            </div>
            <div className="right">
              <Router />
              <Footer />
            </div>
          </div>
        </div>
   </AppStyle>
    </>
  );
}

export default App;

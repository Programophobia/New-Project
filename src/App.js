
import Container from "./components/contener/contener.js";
import NavBar from "./components/navBar/navBar.js";
import Home from "./components/home/home.js";
import Fav from "./components/fav/fav.js";
import About from "./components/about/about.js";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
          <Home />
          <Fav />
          <About />
        </Container>
    </div>
  );
};

export default App;


import Container from "./components/contener/contener.js";
import NavBar from "./components/navBar/navBar.js";
import Home from "./components/home/home.js";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
          <Home />
        </Container>
    </div>
  );
};

export default App;

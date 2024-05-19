
import Container from "./components/contener/contener.js";
import NavBar from "./components/navBar/navBar.js";
import Home from "./components/home/home.js";
import Fav from "./components/fav/fav.js";
import About from "./components/about/about.js";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Favorite' element={<Fav />} />
          <Route path='/about' element={<About />} />
          </Routes>
        </Container>
    </div>
  );
};

export default App;

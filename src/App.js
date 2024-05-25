
import Container from "./components/contener/contener.js";
import NavBar from "./components/navBar/navBar.js";
import Home from "./components/home/home.js";
import Fav from "./components/fav/fav.js";
import About from "./components/about/about.js";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/errorEl/errorEl.js";
import Contact from "./components/contact.js";
import List from './components/list/list.js'

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Favorite' element={<Fav />} />
          <Route path='/about' element={<About />} />
          <Route path="*" element={<ErrorBoundary/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/list/:listId" element={<List />} />
          </Routes>
        </Container>
    </div>
  );
};

export default App;

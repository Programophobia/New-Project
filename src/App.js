import Hero from "./components/hero/hero.js";
import SearchForm from "./components/searchForm/searchForm.js";
import List from "./components/list/list.js";
import Container from "./components/contener/contener.js";

const App = () => {
  return (
    <div>
    <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </div>
  );
};

export default App;

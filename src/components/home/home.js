import Hero from '../hero/hero.js'
import SearchForm from '../searchForm/searchForm.js'
import List from "../list/list.js";

const Home = () =>{
    return(
        <div>
            <Hero />
          <SearchForm />
          <List />
        </div>
    )
}

export default Home;
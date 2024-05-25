import Hero from '../hero/hero.js'
import SearchForm from '../searchForm/searchForm.js'
import Lists from "../list/lists.js";

const Home = () =>{
    return(
        <div>
            <Hero />
          <SearchForm />
          <Lists />
        </div>
    )
}

export default Home;
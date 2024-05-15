import styles from './searcForm.module.scss'
import TextInput from '../textInput/textInput.js';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
           <TextInput placeholder="search"/>
            <button className={styles.button}>Search</button>
        </form>
    );
  };

  export default SearchForm;
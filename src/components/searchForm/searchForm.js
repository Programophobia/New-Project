import styles from './searcForm.module.scss'
import TextInput from '../textInput/textInput.js';
import Button from '../button/button.js';


const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
           <TextInput placeholder="search"/>
           <Button text="Search" />
        </form>
    );
  };

  export default SearchForm;
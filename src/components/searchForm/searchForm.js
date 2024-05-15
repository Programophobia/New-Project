import styles from './searcForm.module.scss'
import TextInput from '../textInput/textInput.js';
import Button from '../button/button.js';


const SearchForm = (props) => {
    return (
        <form className={styles.searchForm}>
           <TextInput placeholder="search"/>
           <Button><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;
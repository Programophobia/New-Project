import styles from './searcForm.module.scss'


const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <input className={styles.input} type="text" />
            <button className={styles.button}>Search</button>
        </form>
    );
  };

  export default SearchForm;
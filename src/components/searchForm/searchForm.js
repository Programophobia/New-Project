import styles from './searcForm.module.scss'
import TextInput from '../textInput/textInput.js';
import Button from '../button/button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = (props) => {
const dispatch = useDispatch();
const [title, setTitle] = useState('')



const search = e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: title });
    setTitle('');
   
}

    return (
        <form className={styles.searchForm} onClick={search}>
           <TextInput placeholder="search" value={title}  onChange={e => setTitle(e.target.value)} />
           <Button  ><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;
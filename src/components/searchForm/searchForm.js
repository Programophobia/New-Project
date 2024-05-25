import styles from './searcForm.module.scss'
import TextInput from '../textInput/textInput.js';
import Button from '../button/button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchString } from '../../redux/store.js';
import { useEffect } from 'react';

const SearchForm = (props) => {
const dispatch = useDispatch();
const [title, setTitle] = useState('')

useEffect(() => {
    dispatch(searchString(''));
  }, [] );


const search = e => {
    e.preventDefault();
    dispatch(searchString(title));
    setTitle('');
    searchString();
   
}

    return (
        <form className={styles.searchForm} onClick={search}>
           <TextInput placeholder="search" value={title}  onChange={e => setTitle(e.target.value)} />
           <Button  ><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;
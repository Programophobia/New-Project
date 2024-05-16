import styles from './cardForm.module.scss';
import Button from '../button/button.js';
import TextInput from '../textInput/textInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const CardForm = props => {
    const [title, setTitle] = useState('');
const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: { title, columnId: props.columnId, id: shortid() } });
        setTitle('');
    };

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm
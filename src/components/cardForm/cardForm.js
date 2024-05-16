import styles from './cardForm.module.scss';
import Button from '../button/button.js';
import TextInput from '../textInput/textInput';
import { useState } from 'react';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
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
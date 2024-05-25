import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../button/button.js';
import TextInput from '../textInput/textInput.js';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store.js';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState ('');
    const dispatch = useDispatch();


    const handleSubmit = e => {
        e.preventDefault();
        dispatch( addColumn ({title, icon, listId: props.listId} ) );
        setTitle('');
        setIcon('');
    }

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span>Title: </span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span>Icon: </span><TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add Column</Button>
        </form>
	);
};

export default ColumnForm;
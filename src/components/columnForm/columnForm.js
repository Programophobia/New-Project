import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../button/button.js';
import TextInput from '../textInput/textInput.js';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState ('');


    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
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
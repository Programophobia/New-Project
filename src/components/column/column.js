import styles from './column.module.scss';
import Card from '../card/card.js';
import CardForm from '../cardForm/cardForm.js';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store.js';

const Column =(props)=>{

   const cards = useSelector(state => getFilteredCards(state, props.id))
    return <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} /> {props.title}</h2>
            <ul className={styles.cards}>

            {cards.map(card =><Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} />
    </article>
}

export default Column
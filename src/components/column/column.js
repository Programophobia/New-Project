import styles from './column.module.scss'
import Card from '../card/card.js'
import CardForm from '../cardForm/cardForm.js'

const Column =(props)=>{

    return <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} /> {props.title}</h2>
            <ul className={styles.cards}>

            {props.cards.map(card =><Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} action={props.action} />
    </article>
}

export default Column
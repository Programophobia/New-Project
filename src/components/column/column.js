import styles from './column.module.scss'

const Column =(props)=>{
    return <article className={styles.column}>
        <h2 className={styles.title}>{props.text}</h2>
    </article>
}

export default Column
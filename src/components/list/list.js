import styles from './list.module.scss'
import Column from '../column/column.js';

const List = () => {
    return <div className={styles.list}>
        <header className={styles.header}>
            <h2 className={styles.title}>Things to do<span> soon!</span></h2>
        </header>
        <p className={styles.description}>Interesting things I want to check out</p>
        <section className={styles.columns}> 
            <Column text="Books"></Column>
            <Column text="Games"></Column>
            <Column text="Movies"></Column>
        </section>
    </div>
}

export default List;
import styles from './list.module.scss';
import Column from '../column/column.js';
import ColumnForm from '../columnForm/columnForm.js';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store.js';


const List = () => {

    const columns = useSelector(getAllColumns);


    return (
            <div className={styles.list}>
              <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon!</span></h2>
              </header>
              <p className={styles.description}>Interesting things I want to check out</p>
              <section className={styles.columns}>
                {columns.map(column =>
                  <Column
                    key={column.id}
                    {...column}  />
                )}
              </section>
              <ColumnForm />
            </div>
    )
}

export default List;
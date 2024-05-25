import styles from './list.module.scss';
import Column from '../column/column.js';
import ColumnForm from '../columnForm/columnForm.js';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById, getColumnsByList } from '../../redux/store.js';


const List = () => {

    const columns = useSelector(columns=> getColumnsByList(columns, 1));
    const listData = useSelector(lists=> getListById(lists,1))

    return (
            <div className={styles.list}>
              <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
              </header>
              <p className={styles.description}>{listData.description}</p>
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
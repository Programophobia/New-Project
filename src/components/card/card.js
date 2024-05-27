import styles from './card.module.scss'
import { addCardFav } from '../../redux/store'
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

const Card = (props) => {
    const dispatch = useDispatch();
    const handleAddFavorite = (event)=>{
        event.preventDefault();
       dispatch(addCardFav(props.id))
    }

    return(
        <li className={styles.card}>{props.title}
        <div onClick={handleAddFavorite}>
        <span><i className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i></span>
        </div>
    </li>

    )
}

export default Card
import PageTitle from "../PageTitle/PageTitle.js"
import { useSelector } from "react-redux"
import { getFavoriteCards } from "../../redux/store.js"
import Card from "../card/card.js"
import styles from './fav.module.scss'

const Fav = () => {

    const favoriteCards = useSelector(state => getFavoriteCards(state));
    return (
        <div className={styles.wrappper}>
        <PageTitle>Favorite</PageTitle>
            <div className={styles.favorite}><span><i className="fa fa-star-o"></i> MY FAVOURITE:</span>
                <ul className={styles.card}>
                    {favoriteCards.map(card => <Card key={card.id} id={card.id} card={card} isFavorite={card.isFavorite} title={card.title} />)}
                </ul>
            </div>

      </div>
    )
}

export default Fav
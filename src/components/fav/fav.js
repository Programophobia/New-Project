import PageTitle from "../PageTitle/PageTitle.js"
import { useSelector } from "react-redux"
import { getFavoriteCards } from "../../redux/store.js"
import Card from "../card/card.js"
import styles from '../card/card.module.scss'


const Fav = () => {

    const favoriteCards = useSelector(state => getFavoriteCards(state));
    return (
        <div>
            <PageTitle>FAVORITE</PageTitle>
            <p> hahah</p>

            <ul className={styles.card}>
            {favoriteCards.map(card => <Card key={card.id} id={card.id} card={card} isFavorite={card.isFavorite} title={card.title} />)}
          </ul>
        </div>
    )
}

export default Fav
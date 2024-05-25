import styles from './navBar.module.scss'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <nav className={styles.navigation}>
            <a href="/"><i className="fa fa-tasks"></i></a>
            <ul className={styles.menu}>
            <li><NavLink className={({isActive }) => isActive ? styles.linkActive : undefined} to="/">HOME</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/favorite">FAVORITE</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">ABOUT</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/contact">CONTACT</NavLink></li>
            </ul>
        </nav>)
}

export default NavBar
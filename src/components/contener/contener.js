import styles from './contener.module.scss'

const Container = (props) => {
    return<div className={styles.con}>{props.children}</div>
}

export default Container
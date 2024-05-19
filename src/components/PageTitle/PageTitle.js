import styles from './pageTitle.module.scss'

const PageTitle = (props) => {
    return (
        <h1 className={styles.title}>
            {props.children}
        </h1>
    )
}

export default PageTitle
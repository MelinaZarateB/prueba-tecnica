import styles from './Header.module.css';

const Header = () => {
    return(
        <>
       <section className={styles.header}>
        <div className={styles.headerContent}>
            <h1 className={styles.title}>Hola, mi nombre es <span>Sol</span></h1>
            <h3 className={styles.textAnimation}>Soy 
                <span>Desarrolladora Front-End</span></h3>
                
        </div>
       </section>
        </>
    )

}
export default Header;
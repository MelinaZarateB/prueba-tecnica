import styles from './About.module.css';
import Interests from '../Interests/Interests';

const About = () => {
    return(
        <>
        <section className={styles.aboutContainer}>
         <div className={styles.aboutMeContent}>
            <div className={styles.content}>
            <h2>Sobre mi</h2>
            <p>Apasionada Desarrolladora Web con experiencia en React, Node y JavasCript. Comprometida con la creacion de soluciones escalables y eficientes.</p>
            </div>
         <div>
            <Interests/>
         </div>
         </div>
        </section>
        </>
    )

}
export default About;
import styles from './About.module.css';
import Interests from '../Interests/Interests';

const About = () => {
    return(
        <>
        <section className={styles.aboutContainer}>
         <div className={styles.aboutMeContent}>
            <div className={styles.content}>
            <h2>Sobre mi</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus tempore doloremque nemo soluta repellendus cupiditate assumenda molestias, eius fugit commodi ipsum, et iure esse impedit. Fugiat incidunt iste et perferendis.</p>
            </div>
         </div>
         <div>
            <Interests></Interests>

         </div>
        </section>
        </>
    )

}
export default About;
'use client'

import styles from './Interests.module.css';
import { useRef } from 'react';
import useNearScreen from '../hooks/useNearScreen';

const Interests = () => {

    const elementRef = useRef();
    const show = useNearScreen(elementRef)

    return(
        <>
         <section className={styles.interests}>
        <div className={styles.sectionContent}>
            <h4 className={styles.title}>Intereses</h4>
            <div className={styles.row}>
                <div className={styles.col}>
                <div className={styles.skill}>
                        <span className={styles.span}>Desarrollo Web</span>
                        <div className={styles.interestBar}>
                            <div className={`${styles.progress} ${show ? styles.webDevelopment : ''}`} ref={elementRef}>
                                <span className={styles.spanBarraSkill}>99%</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <span className={styles.span}>Diseño UX UI</span>
                        <div className={styles.interestBar}>
                            <div className={`${styles.progress} ${show ? styles.design : ''}`} ref={elementRef}>
                                <span className={styles.spanBarraSkill}>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <span className={styles.span}>Deportes</span>
                        <div className={styles.interestBar}>
                            <div className={`${styles.progress} ${show ? styles.sports : ''}`} ref={elementRef}>
                                <span className={styles.spanBarraSkill}>75%</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <span className={styles.span}>Lectura</span>
                        <div className={styles.interestBar}>
                            <div className={`${styles.progress} ${show ? styles.reading : ''}`} ref={elementRef}>
                                <span className={styles.spanBarraSkill}>73%</span>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
        </>
    )

}
export default Interests;
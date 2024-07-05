import styles from './page.module.css';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';

export default function Home() {
  return (
    <section className={styles.container}>
      <Header></Header>
      <About></About>
    </section>
  )
}

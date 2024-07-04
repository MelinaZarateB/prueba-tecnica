import styles from './page.module.css';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <section className={styles.container}>
      <div>
      <Header></Header>
      </div>
    </section>
  )
}

import styles from './page.module.css';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Home() {
  return (
    <section className={styles.containerHome}>
      <Header />
      <About />
      <ContactForm />
    </section>
  )
}

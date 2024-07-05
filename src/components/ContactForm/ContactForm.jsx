'use client'
import styles from './ContactForm.module.css';
import Swal from 'sweetalert2'

const ContactForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.elements[0].value;
        const email = form.elements[1].value;
        const message = form.elements[2].value;

        if (name === '' || email === '' || message === '') {
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos son obligatorios',
                showConfirmButton: false,
                timer: 2000
            });
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Email no válido',
                showConfirmButton: false,
                timer: 2000
            });
            return;
        }
        Swal.fire({
            icon: 'success',
            title: 'Información enviada con éxito',
            showConfirmButton: false,
            timer: 2000
        });
        form.reset();
    }

    return(
        <>
        <section className={styles.contactFormContainer}>
            <div>
                <h2>¡Contactame!</h2>
            </div>
            <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='Nombre' 
                autoComplete="off"
                required/>
                <input 
                type="email" 
                placeholder='Email' 
                autoComplete="off"
                required/>
                <textarea name="" id="" cols='20' rows='10' placeholder='Tu mensaje' required></textarea>
                <button type='submit' className={styles.buttonSubmit}>
                    Enviar
                </button>
            </form>
            </div>
        </section>
        </>
    )
}

export default ContactForm;

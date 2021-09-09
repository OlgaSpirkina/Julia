import React, { useState } from 'react';
import styles from './Contact.module.css'

const Contact = () => {
  // Regex
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [labelForName, setLabelForName] = useState('');
  const [labelForEmail, setLabelForEmail] = useState('');
  const [labelForCompany, setLabelForCompany] = useState('');
  const [labelForPhone, setLabelForPhone] = useState('');
  const [labelForMessage, setLabelForMessage] = useState('');
  const validEmail = new RegExp(
   '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
   const validate = () => {
    if (!validEmail.test(email)) {
       setEmailErr(true);
     }
    };
  return(
    <section className={`${styles.section} ${styles.get_in_touch}`}>
      <h1>Contact</h1>
      <div>
        <form className={styles.contact_form} action="https://formspree.io/f/xwkaewbb" method="POST">
          <div className={styles.form_field}>
            <input
              onChange={(e) => setLabelForName(e.target.value)}
              className={styles.input_text}
              id="name"
              type="text"
              name="name"
              required="required" />
            <label
              className={styles.label}
              htmlFor="name"
            >
              {labelForName ? '' : 'name'}
            </label>
          </div>
          <div className={styles.form_field}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              onChange={(e) => setLabelForEmail(e.target.value)}
              className={styles.input_text}
              id="email"
              type="email"
              name="email"
              required="required"
            />
            <label
              className={styles.label}
              htmlFor="email"
            >
              {labelForEmail ? '' : 'email'}
            </label>
          </div>
          <div className={styles.form_field}>
            <input
              onChange={(e) => setLabelForCompany(e.target.value)}
              className={styles.input_text}
              id="company"
              type="text"
              name="company"
            />
            <label
              className={styles.label}
              htmlFor="company"
            >
              {labelForCompany ? '' : 'company name'}
            </label>
          </div>
          <div className={styles.form_field}>
            <input
              onChange={(e) => setLabelForPhone(e.target.value)}
              className={styles.input_text}
              id="phone"
              type="text"
              name="phone"
            />
            <label
              className={styles.label}
              htmlFor="phone"
            >
              {labelForPhone ? '' : 'phone number'}
            </label>
          </div>
          <div className={styles.form_field}>
            <input
              onChange={(e) => setLabelForMessage(e.target.value)}
              className={styles.input_text}
              id="message"
              type="text"
              name="message"
              required="required"
            />
            <label
              className={styles.label}
              htmlFor="message"
            >
              {labelForMessage ? '' : 'your message'}
            </label>
          </div>
          <div className={styles.form_field}>
            <input
              className={styles.submit_btn}
              onClick={validate}
              type="submit"
              value="Send"
              name=""
            />
            {emailErr && <p style={{ color: 'red' }}>Your email is invalid</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

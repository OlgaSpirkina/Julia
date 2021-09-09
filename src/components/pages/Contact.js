import React, { useState } from 'react'
import Input from './Input'
import styles from './Contact.module.css'

const contactForm = [
  {
    "id": "name",
    "type": "text",
    "name": "name",
    "text": "name"
  },
  {
    "id": "email",
    "type": "email",
    "name": "email",
    "text": "email"
  },
  {
    "id": "company",
    "type": "text",
    "name": "company",
    "text": "company name"
  },
  {
    "id": "phone",
    "type": "text",
    "name": "phone",
    "text": "phone number"
  },
  {
    "id": "message",
    "type": "text",
    "name": "message",
    "text": "your message"
  }
]

const Contact = () => {
  // Regex
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
 // Special case for email to combine regex and setLabel state that is defined in Input component for others inputs
  const [labelForEmail, setLabelForEmail] = useState('');

  const validEmail = new RegExp(
   '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
   const validate = () => {
    if (!validEmail.test(email)) {
       setEmailErr(true);
     }
    };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setLabelForEmail(e.target.value)
  }
  return(
    <section className={`${styles.section} ${styles.get_in_touch}`}>
      <h1>Contact</h1>
      <div>
        <form className={styles.contact_form} action="https://formspree.io/f/xwkaewbb" method="POST">
          {contactForm.map((elem, index) => {
            if(elem.id === 'email'){
              return(
                <div className={styles.form_field}>
                <input
                  onChange={(e) => onChangeEmail(e)}
                  className={styles.input_text}
                  id={elem.id}
                  type={elem.type}
                  name={elem.name}
                  required="required"
                />
                <label
                  className={styles.label}
                  htmlFor={elem.id}
                >
                  {labelForEmail ? '' : elem.text}
                </label>
                </div>
              )
            }
            return(
            <div key={index} className={styles.form_field}>
              <Input
                id={elem.id}
                type={elem.type}
                name={elem.name}
                text={elem.text}
              />
            </div>
            )
          })}
        </form>
      </div>
    </section>
  )
}

export default Contact

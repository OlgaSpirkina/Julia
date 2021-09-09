import React, { Fragment, useState } from 'react';
import styles from './Contact.module.css'

const Input = ({ id, type, name, text }) => {
  const [label, setLabel] = useState('');
  return(
    <Fragment>
      <input
        onChange={(e) => setLabel(e.target.value)}
        className={styles.input_text}
        id={id}
        type={type}
        name={name}
        required="required" />
      <label
        className={styles.label}
        htmlFor={id}
      >
        {label ? '' : text}
      </label>
    </Fragment>
  )
}

export default Input

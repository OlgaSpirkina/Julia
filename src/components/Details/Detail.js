import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FiChevronDown } from 'react-icons/fi'
import styles from './Details.module.css'

const Detail = ({ text }) => {
  const [toggle, setToggle] = useState(false);

  return(
    <div>
      <p
        onClick={()=>setToggle(!toggle)}
      >
        { !toggle ? 'Read about' : 'Close'}
        <FiChevronDown className={ toggle ? `${styles.turn_around} ${styles.icon_in_details}` : `${styles.icon_in_details}`}/>
      </p>
      <p style={{ marginTop: '0' }}>
        {toggle ? text : null}
      </p>
    </div>
  )
}

Detail.propTypes = {
  text: PropTypes.string.isRequired
}

export default Detail

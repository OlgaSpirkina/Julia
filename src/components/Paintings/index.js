import React from 'react'
import PropTypes from 'prop-types'
import Painting from './Painting'
import styles from './Paintings.module.css'

const Paintings = ({ paintings }) => {
  return(
    <section className={styles.section_paintings}>
      {paintings.map((paint, index)=>{
        return(
          <Painting key={index} paint={paint} />
        )
      })}
    </section>
  )
}

Paintings.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Paintings

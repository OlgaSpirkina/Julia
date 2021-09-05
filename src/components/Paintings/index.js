import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Painting from './Painting'
import styles from './Paintings.module.css'
require('../../index.css')


const Paintings = ({ paintings }) => {
  return(
    <Fragment>
      <section className={`${styles.section_paintings} ${styles.section}`}>
        {paintings.map((paint, index)=>{
          return(
            <Painting key={index} paint={paint} />
          )
        })}
      </section>
    </Fragment>
  )
}

Paintings.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Paintings

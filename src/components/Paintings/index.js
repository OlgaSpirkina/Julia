import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Painting from './Painting'
import ArrowUp from '../ArrowUp'
import styles from './Paintings.module.css'
require('../../index.css')

const Paintings = ({ paintings }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
/* detect if small screen */
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
/* delete eventListener if function changeWidth is deleted */
    return()=>{
      window.removeEventListener('resize', changeWidth)
    }
  },[])
  return(
    <Fragment>
      <section id="bout" className={`${styles.section_paintings} ${styles.section}`}>
        {paintings.map((paint, index)=>{
          return(
            <Painting key={index} paint={paint} />
          )
        })}
        {screenWidth <= 649 && (
          <ArrowUp href="#" />
        )}
      </section>
      <div>

      </div>
    </Fragment>
  )
}

Paintings.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Paintings

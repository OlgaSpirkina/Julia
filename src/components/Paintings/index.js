import React, { Fragment, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Painting from './Painting'
import ArrowUp from '../ArrowUp'
import styles from './Paintings.module.css'
require('../../index.css')

// scroll to the top of the page
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Paintings = ({ paintings }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
// Start scroll to top
  const sectionRef = useRef(null);
  const executeScroll = () => scrollToRef(sectionRef);
// Finish scroll to top

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
      <section ref={sectionRef} id="bout" className={`${styles.section_paintings} ${styles.section}`}>
        {paintings.map((paint, index)=>{
          return(
            <Painting key={index} paint={paint} />
          )
        })}
        {screenWidth <= 649 && (
          <ArrowUp onClick={executeScroll} />
        )}
      </section>
    </Fragment>
  )
}

Paintings.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Paintings

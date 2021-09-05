import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import Detail from './Detail'
import ArrowUp from '../ArrowUp'
import styles from './Details.module.css'

// scroll to the top of the page
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Details = ({ paintings }) =>{
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
// Start filter by category
  let { category } = useParams();
  let filteredByCategory = [];
  for(let i=0; i<paintings.length; i++){
    if(paintings[i].category == category){
      filteredByCategory = paintings.filter((a)=>{if(a.category==category){return a}});
    }
  }
// Finish filter by category

// Start scroll to top
const detailsRef = useRef(null);
const executeScroll = () => scrollToRef(detailsRef);
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
    <section ref={detailsRef} className={`${styles.section} ${styles.details_container}`}>
      {filteredByCategory.map((elem, i) => {
        return(
          <div key={i} className={styles.detail_text_img}>
            <img src={elem.image} alt={elem.title} />
            <Detail text={elem.text} />
          </div>
        )
      })}
      {screenWidth <= 649 && (
        <ArrowUp onClick={executeScroll} />
      )}
    </section>
  )
}

Details.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Details

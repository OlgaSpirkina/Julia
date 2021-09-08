import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import Detail from './Detail'
import Carousel from './Carousel'
import styles from './Details.module.css'


const Details = ({ paintings }) =>{
  /* detect if small screen */
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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

// Start filter by category
  let { category } = useParams();
  let filteredByCategory = [];
  for(let i=0; i<paintings.length; i++){
    if(paintings[i].category == category){
      filteredByCategory = paintings.filter((a)=>{if(a.category==category){return a}});
    }
  }
// Finish filter by category

  return(
    <section className={`${styles.section} ${styles.details_container}`}>
      <div
        style={{
          width: '75%',
          display: 'flex',
          justifyContent: 'flex-end'
      }}
      >
      {screenWidth <= 1000  &&(
        <Link to="/gallery">
          <button
            style={{
              border: 'none',
              backgroundColor: 'var(--primaryOrange)',
              color: '#fff',
              padding: '.5rem',
              borderRadius: '.5rem',
              cursor: 'pointer',
              fontSize: '1rem'
             }}>
            Go to Gallery
          </button>
        </Link>
      )}
      </div>
      <p style={{ textAlign: 'justify', margin: '1rem' }}>
        Double click on the image to see more details. Once the details are displayed, click and hover over to zoom.
      </p>
      {filteredByCategory.map((elem, i) => {
        return(
          <div key={i} className={styles.detail_text_img}>
            <Carousel mainImg={elem.image} mainAlt={elem.title} details={elem.details} />
            <Detail text={elem.text} />
          </div>
        )
      })}
    </section>
  )
}

Details.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Details

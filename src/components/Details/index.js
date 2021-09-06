import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import Detail from './Detail'
import styles from './Details.module.css'


const Details = ({ paintings }) =>{
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
      </div>
      {filteredByCategory.map((elem, i) => {
        return(
          <div key={i} className={styles.detail_text_img}>
            <img src={elem.image} alt={elem.title} />
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

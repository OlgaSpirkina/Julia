import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Gallery.module.css'

const Gallery = ({ paintings }) => {
  const allCategories = [ ...new Set(paintings.map(elem => elem.category))];
  const [categoryName, setCategoryName] = useState('');

    return(
      <>
      <section className={`${styles.section_gallery} ${styles.section}`}>
        {allCategories.map((category, i) => {
          return(
            <Link
              to={`/details/${category}`}
              key={i}
              onClick={() => setCategoryName(`${category}`)}
              className={styles.gallery_container}
            >
              {category}
            </Link>
          )
        })}
      </section>
      </>

    )

}

Gallery.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Gallery

/*
const allCategories = [ ...new Set(paintings.map(elem => elem.category))];
const [categoryName, setCategoryName] = useState('');
*/
//   onClick={() => setCategoryName(`${category}`)}
/*   <div className={styles.for_paintings}>
  {paintings.map((paint, index)=>{
    return(
    categoryName === paint.category
    ?
      <Painting key={index} paint={paint} />
    :
      null
    )
  })}
  </div> */

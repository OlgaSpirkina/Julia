import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Painting from '../Paintings/Painting'
import styles from './Gallery.module.css'

const Gallery = ({ paintings }) => {
    const allCategories = [ ...new Set(paintings.map(elem => elem.category))];
    const [categoryName, setCategoryName] = useState('');

    return(
      <>
      <section className={`${styles.section_gallery} ${styles.section}`}>
        {allCategories.map((category, i) => {
          return(
            <div
              key={i}
              onClick={() => setCategoryName(`${category}`)}
              className={styles.gallery_container}
            >
              {category}
            </div>
          )
        })}
        <div className={styles.for_paintings}>
        {paintings.map((paint, index)=>{
          return(
          categoryName === paint.category
          ?
            <Painting key={index} paint={paint} />
          :
            null
          )
        })}
        </div>
      </section>
      </>

    )

}

Gallery.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Gallery

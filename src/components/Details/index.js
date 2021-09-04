import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { FiChevronDown } from 'react-icons/fi'
import styles from './Details.module.css'

const Details = ({ paintings }) =>{
  let { category } = useParams();


  let x = [];
  for(let i=0; i<paintings.length; i++){
    if(paintings[i].category == category){
      // Start Filter
      x = paintings.filter((a)=>{if(a.category==category){return a}});
      console.log(x)
    }

  }
  return(
    <section className={`${styles.section} ${styles.details_container}`}>
      {x.map((elem, i) => {
        return(
          <img key={i} src={elem.image} alt={elem.title} />
        )
      })}
    </section>
  )
}

Details.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Details
/*
for(let i=0; i<paintings.length; i++){
  if(paintings[i].category == category){
    arr.push(paintings[i].image);
  }

}
*/

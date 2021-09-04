import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { FiChevronDown } from 'react-icons/fi'
import styles from './Details.module.css'

const Details = ({ paintings }) =>{
  let { category } = useParams();
  let img = '';
  let arr = [];
  for(let i=0; i<paintings.length; i++){
    if(paintings[i].category == category){
      arr.push(paintings[i].image);
    }
  }
  return(
    <section className={styles.details_container}>
      {arr.map((img, i) => {
        return(
          <img key={i} src={img} alt="un tableau" />
        )
      })}
    </section>
  )
}

Details.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Details

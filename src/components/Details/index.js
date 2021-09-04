import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { FiChevronDown } from 'react-icons/fi'
import styles from './Details.module.css'

const Details = ({ paintings }) =>{
  let { category } = useParams();
  const [toggle, setToggle] = useState(false);
  const displayDetails = () => {
    setToggle(!toggle);
  }

  let filteredByCategory = [];
  for(let i=0; i<paintings.length; i++){
    if(paintings[i].category == category){
      filteredByCategory = paintings.filter((a)=>{if(a.category==category){return a}});
    }

  }
  return(
    <section className={`${styles.section} ${styles.details_container}`}>
      {filteredByCategory.map((elem, i) => {
        return(
          <div className={styles.detail_text_img}>
            <img key={i} src={elem.image} alt={elem.title} />
            <div>
              <p
                onClick={displayDetails}
              >
                { !toggle ? 'Read about' : 'Close'}
                <FiChevronDown className={ toggle ? `${styles.turn_around} ${styles.icon_in_details}` : `${styles.icon_in_details}`}/>
              </p>
              <p
                className=
                { toggle ? `${styles.active}` : `${styles.paragraph_hidden}`}
              >
                {elem.text}
              </p>
            </div>
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
/*
for(let i=0; i<paintings.length; i++){
  if(paintings[i].category == category){
    arr.push(paintings[i].image);
  }

}
*/

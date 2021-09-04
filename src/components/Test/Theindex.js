import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { FiChevronDown } from 'react-icons/fi'
import styles from './Details.module.css'

const Details = ({ paintings }) =>{
      console.log('Paintings: ' + paintings)
  let { category } = useParams();
  const [toggle, setToggle] = useState(false);
  const displayDropdown = () => {
    setToggle(!toggle);
  }
  let description = '';
  let img = '';
  let title = '';

  for(let i=0; i<paintings.length; i++){
    if(category === paintings[i].category){
      img = `${paintings[i].image}`;
      description = `${paintings[i].text}`
      title = `${paintings[i].title}`
    }
  }
  return(
    <Fragment>
    <h1>Coucou</h1>
      <div className={styles.details_container}>
        <h2>{title}</h2>
        <img src={img} alt={title}/>
        <div>
          <p onClick={displayDropdown()}>
            Learn more <FiChevronDown />
          </p>
          <p className={
            toggle ? `${styles.active}` : `${styles.paragraph_hidden}`
          }>{description}</p>
        </div>
      </div>
    </Fragment>
  )
}

Details.propTypes = {
  paintings: PropTypes.array.isRequired
}

export default Details

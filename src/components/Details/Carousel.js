import React, { Fragment, useState } from 'react'
import Slides from './Slides'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import styles from './Details.module.css'

const Carousel = ({ details, mainAlt, mainImg }) => {
  console.log(details)
  // Detailed zoom image
    const [detailImg, setDetailImg] = useState(false);
    // const displayCarousel = () => {
    //   setDetailImg(!detailImg);
    // }
  return(
    <Fragment>
      <img
        onDoubleClick={() => setDetailImg(!detailImg)}
        src={mainImg}
        alt={mainAlt}
      />
      <div className=
      {
        detailImg
          ?
        `${styles.active} ${styles.slideshow_container}`
          :
        `${styles.slideshow_container}`
      }>
        {detailImg
          ?
          <Fragment>
            <AiOutlineCloseCircle
              onClick={() => setDetailImg(!detailImg)}
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                fontSize: '1.5rem',
                color: 'var(--primaryOrange)',
                marginBottom: '.5rem'
              }}
            />
            <Slides
              details={details}
          />
          </Fragment>
          :
          null
        }
      </div>
    </Fragment>
  )
}

export default Carousel

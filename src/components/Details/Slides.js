import React, { Fragment } from 'react'
import styles from './Details.module.css'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';

/*
InnerImageZoom is installed with npm install react-inner-image-zoom
*/
const Slides = ({ details }) => {
  return(
    <Fragment>
      {details.map((zoom, i) => {
        return(
        <InnerImageZoom
          key={i}
          src={zoom}
          alt="zoom in picture elements"
          className={styles.zoom_elements}
          zoomSrc={zoom} />
      )})}
    </Fragment>
  )
}

export default Slides

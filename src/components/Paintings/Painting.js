import PropTypes from 'prop-types'
import styles from './Paintings.module.css'

const Painting = ({ paint: { image, title} }) => {
  const verticalImg = title.includes('vpaint');
  return(
    <div className={styles.paint_container}>
      <img
        src={image}
        alt={title}
        className={(verticalImg === true) ? `${styles.vertical}` : `${styles.horizontal}` }
      />
      <p>{title}</p>
    </div>
  )
}

Painting.propTypes = {
  paint: PropTypes.object.isRequired
}

export default Painting

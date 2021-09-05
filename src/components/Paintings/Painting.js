import PropTypes from 'prop-types'
import styles from './Paintings.module.css'

const Painting = ({ paint: { image, title} }) => {
  const verticalImg = title.includes('vpaint');
  return(
    <figure className={styles.paint_container}>
      <figcaption className={styles.figcaption}>{title}</figcaption>
      <img
        src={image}
        alt={title}
        className={(verticalImg === true) ? `${styles.vertical}` : `${styles.horizontal}` }
      />
    </figure>
  )
}

Painting.propTypes = {
  paint: PropTypes.object.isRequired
}

export default Painting

import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import Detail from './Detail'
import styles from './Details.module.css'

const Details = ({ paintings }) =>{
  let { category } = useParams();
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
          <div key={i} className={styles.detail_text_img}>
            <img src={elem.image} alt={elem.title} />
            <Detail text={elem.text} />
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

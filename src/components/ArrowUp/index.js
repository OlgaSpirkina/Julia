import { Link } from 'react-router-dom'
import { MdArrowUpward } from 'react-icons/md'
import styles from './ArrowUp.module.css'

const ArrowUp = ({ href }) =>{
  return(
    <a href={href} className={styles.arrowUp_container}>
      <MdArrowUpward className={styles.arrowUp}/>
    </a>
  )
}

export default ArrowUp

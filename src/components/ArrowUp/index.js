import { MdArrowUpward } from 'react-icons/md'
import styles from './ArrowUp.module.css'

const ArrowUp = ({ onClick }) =>{
  return(
    <div onClick={onClick} className={styles.arrowUp_container}>
      <MdArrowUpward className={styles.arrowUp}/>
    </div>
  )
}

export default ArrowUp

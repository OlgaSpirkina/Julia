import { Icon32LogoVk } from '@vkontakte/icons';
// import { Icon24LogoFacebook } from '@vkontakte/icons';
import { FaFacebookSquare } from 'react-icons/fa'
import styles from './SocialMedia.module.css'

const SocialMedia = () =>{
  return(
    <div className={styles.logo_parent} >
      <Icon32LogoVk className={styles.logovk} href="#" />
      <FaFacebookSquare style={{ width: '32px' }} className={styles.fb} href="#" /> 
    </div>
  )
}

export default SocialMedia
//   <Icon24LogoFacebook className={styles.logovk} href="#" />

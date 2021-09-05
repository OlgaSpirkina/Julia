import { Icon32LogoVk } from '@vkontakte/icons';
// import { Icon24LogoFacebook } from '@vkontakte/icons';
import { ImFacebook2 } from 'react-icons/im'
import styles from './SocialMedia.module.css'

const SocialMedia = () =>{
  return(
    <div className={styles.logo_parent} >
      <Icon32LogoVk className={styles.logovk} href="#" />
      <ImFacebook2 style={{ width: '32px' }} className={styles.fb} href="#" />
    </div>
  )
}

export default SocialMedia
//   <Icon24LogoFacebook className={styles.logovk} href="#" />

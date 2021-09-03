import { Icon24LogoVk } from '@vkontakte/icons';
import { Icon24LogoFacebook } from '@vkontakte/icons';
import styles from './SocialMedia.module.css'

const SocialMedia = () =>{
  return(
    <div className={styles.logo_parent}>
      <Icon24LogoVk className={styles.logovk} href="#" />
      <Icon24LogoFacebook className={styles.logovk} href="#" />
    </div>
  )
}

export default SocialMedia

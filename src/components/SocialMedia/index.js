import { Icon32LogoVk } from '@vkontakte/icons';
import { AiOutlineInstagram } from 'react-icons/ai'
import { ImFacebook2 } from 'react-icons/im'
import styles from './SocialMedia.module.css'

const SocialMedia = () =>{
  return(
    <div className={styles.logo_parent} >
      <a href="#" target="_blank"><Icon32LogoVk className={styles.logovk} /></a>
      <a href="https://www.facebook.com/ethuil" target="_blank"><ImFacebook2 className={styles.fb} href="#" /></a>
      <a href="https://instagram.com/ethuil_erin?r=nametag" target="_blank"><AiOutlineInstagram className={styles.ig} href="#" /></a>
    </div>
  )
}

export default SocialMedia

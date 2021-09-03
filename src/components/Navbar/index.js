import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import SocialMedia from '../SocialMedia'
import { FcMenu } from 'react-icons/fc'
import { VscClose } from 'react-icons/vsc'
import styles from './Navbar.module.css'

/* an array of objects to create the navlinks */
const navArr = [
  {
    "link": "/",
    "title": "Home"
  },
  {
    "link": "/gallery",
    "title": "Gallery"
  },
  {
    "link": "/about",
    "title": "About"
  },
  {
    "link": "/contact",
    "title": "Contact"
  }
];

const Navbar = ({ title }) => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  }
  return(
    <aside className={styles.aside_in_nav}>
      <nav className={styles.navbar}>
        <h1><NavLink to="/">{title}</NavLink></h1>
        <div
          className={styles.menu_icon}
          onClick={toggleMenu}
        >
          {!toggle ? <FcMenu /> : <VscClose />}
        </div>
        <div
          className=
          {toggle ? `${styles.active} ${styles.navbar_links}` : `${styles.navbar_links}`}
        >
          <ul
            onClick={toggleMenu}
            className=
            {toggle ? `${styles.active} ${styles.navbar_links}` : `${styles.navbar_links}`}
          >
          {navArr.map((elem, index)=>{
            return(
              <li key={index}>
                <NavLink
                  activeStyle={{ color: '#f95602', textDecoration: 'underline' }}
                  exact to={elem.link}
                >
                  {elem.title}
                </NavLink>
              </li>
            )
          })}
          </ul>
          <SocialMedia />
        </div>
      </nav>
    </aside>
  )
}

Navbar.defaultProps={
  title: 'Julia SHEBALINA'
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar

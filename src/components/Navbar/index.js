import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FcMenu } from 'react-icons/fc'
import { VscClose } from 'react-icons/vsc'
import styles from './Navbar.module.css'

const Navbar = ({ title }) => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  }
  return(
    <aside className={styles.aside_in_nav}>
      <nav className={styles.navbar}>
        <h1><Link to="/">{title}</Link></h1>
        <div
          className={styles.menu_icon}
          onClick={toggleMenu}
        >
          {!toggle ? <FcMenu /> : <VscClose /> }
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
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

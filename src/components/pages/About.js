import React, { useState, useEffect, useRef } from 'react'
import ArrowUp from '../ArrowUp'
import styles from './About.module.css'
import portrait from '../../assets/bio.jpg'

// scroll to the top of the page
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const About = () =>{
// Start scroll to top
  const goUp = useRef(null);
  const executeScroll = () => scrollToRef(goUp);
// Finish scroll to top

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
/* detect if small screen */
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
/* delete eventListener if function changeWidth is deleted */
    return()=>{
      window.removeEventListener('resize', changeWidth)
    }
  },[])
  return(
    <section className={styles.section}>
      <div className={styles.section_about}>
        <h1 ref={goUp}>About</h1>
        <img src={portrait} alt="portrait of Julia" />
        <h2>My Work</h2>
        <p>Sustainable kale chips 8-bit, four dollar toast wolf lo-fi palo santo selvage artisan. Cornhole next level cray, glossier kale chips scenester 8-bit locavore umami. Jean shorts chambray gochujang chia, activated charcoal salvia tacos lyft mumblecore normcore typewriter wolf trust fund meggings lo-fi. Af heirloom kombucha yr normcore organic humblebrag, kale chips irony. Retro bitters bushwick organic, swag ennui butcher health goth post-ironic scenester craft beer seitan edison bulb cred normcore.</p>
        <h3>Bio</h3>
        <p>Gochujang asymmetrical thundercats williamsburg cardigan enamel pin biodiesel knausgaard marfa vexillologist meh. Tattooed live-edge listicle jianbing tbh tousled chartreuse hell of hot chicken pop-up taiyaki cred. Raclette taxidermy kinfolk sustainable mixtape tacos cloud bread chia viral quinoa. Chicharrones vaporware vexillologist single-origin coffee franzen bespoke austin farm-to-table authentic locavore. Crucifix wolf copper mug migas squid stumptown edison bulb polaroid.</p>
        {screenWidth <= 900 && (
          <ArrowUp onClick={executeScroll} />
        )}
      </div>
      </section>
  )
}

export default About

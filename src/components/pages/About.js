import styles from './About.module.css'
import portrait from '../../assets/bio.jpg'
const About = () =>{
  return(
    <section className={styles.section}>
      <div className={styles.section_about}>
        <h1>About</h1>
        <img src={portrait} alt="portrait of Julia" />
        <h2>My Work</h2>
        <p>Sustainable kale chips 8-bit, four dollar toast wolf lo-fi palo santo selvage artisan. Cornhole next level cray, glossier kale chips scenester 8-bit locavore umami. Jean shorts chambray gochujang chia, activated charcoal salvia tacos lyft mumblecore normcore typewriter wolf trust fund meggings lo-fi. Af heirloom kombucha yr normcore organic humblebrag, kale chips irony. Retro bitters bushwick organic, swag ennui butcher health goth post-ironic scenester craft beer seitan edison bulb cred normcore.</p>
        <h3>Bio</h3>
        <p>Gochujang asymmetrical thundercats williamsburg cardigan enamel pin biodiesel knausgaard marfa vexillologist meh. Tattooed live-edge listicle jianbing tbh tousled chartreuse hell of hot chicken pop-up taiyaki cred. Raclette taxidermy kinfolk sustainable mixtape tacos cloud bread chia viral quinoa. Chicharrones vaporware vexillologist single-origin coffee franzen bespoke austin farm-to-table authentic locavore. Crucifix wolf copper mug migas squid stumptown edison bulb polaroid.</p>
      </div>
      </section>
  )
}

export default About

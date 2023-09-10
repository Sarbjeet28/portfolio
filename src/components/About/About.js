import React from 'react'
import styles from './About.module.css'
import Reveal from '../Reveal/Reveal'

export default function About() {
  return (
    <section id="about" className={styles.about}>

        <Reveal>
        <div className="container">
            <div className={styles.title}>
                <h2>
                    About <span>Me</span>
                </h2>
                <hr/>
            </div>
            <div className="grid">
                <div className={styles["about-img"]}>
                    <img src="./images/profile.jpg" alt="Sarbjeet Kaur"/>
                </div>
                <div className={styles["about-content"]}>
                    <h3 className={styles.border}>Hi There!</h3>
                    <p>
                        I'm <span className={styles.name}>Sarbjeet Kaur</span>,As a final year student pursuing a Bachelor of Technology in Computer Science and Engineering (CSE), I bring a passion for innovative problem-solving and a strong foundation in computer science principles. With a relentless drive to stay updated with emerging technologies, I strive to apply my theoretical knowledge to practical scenarios and contribute to the development of cutting-edge solutions. Seeking opportunities to collaborate with diverse teams and make a positive impact in the tech industry.
                    </p>
                </div>
            </div>
        </div>
        </Reveal>
    </section>
  )
}

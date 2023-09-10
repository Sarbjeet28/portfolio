import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'

function Home() {
    const items = ["Designer","Software Developer"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() =>{
        const interval = setInterval(() =>{
            setCurrentIndex((prevIndex) =>(prevIndex +1)% items.length);
        },3000);
        return()=> clearInterval(interval);
    })
  return (
    <section id="home">
        <div className="container">
            <div className={styles.home}>
                <div classNmae={styles["home-content"]}>
                    <div className={styles["home-title"]}>
                        <h2>Hey, I'm</h2>
                        <h1 style={{color: "lightcoral"}}>Sarbjeet Kaur</h1>
                    </div>
                    <div className={styles["text-wrapper"]}>
                        <p>
                            Creative <span classname ={styles.items}>{items[currentIndex]}</span>
                        </p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <a href="#portfolio">View Projects</a>
                        </div>
                        <span className={styles.divider}>or</span>
                        <div className={styles.link}>
                            <a href="#about">Read About Me</a>
                        </div>
                    </div>
                    <div classname={styles.scroll}>
                        <a href="#about">
                            <span></span>
                        </a>
                    </div>
                </div>
                <div className={styles.circle}>
                    <div className={styles.content}>
                        <img src="./images/profile.jpg" alt="Sarbjeet Kaur"/>
                        <h2>Sarbjeet Kaur 
                            <br/> <span/> Software Developer</h2>
                        <a href="#contact">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home;

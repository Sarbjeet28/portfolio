import React, { useEffect, useRef, useState } from 'react'
import styles from "./Skills.module.css"
import SkillsBar from './SkillsBar/SkillsBar';
import Reveal from '../Reveal/Reveal'

const skillsData = [
    {
        label:"JavaScript",
        percentage:20,
        style:`${styles['progress-line']} ${styles.js}`,
    },
    {
        label:"Python",
        percentage:90,
        style:`${styles['progress-line']} ${styles.python}`,
    },
    {
        label:"C",
        percentage:80,
        style:`${styles['progress-line']} ${styles.c}`,
    },
    {
        label:"C++",
        percentage:80,
        style:`${styles['progress-line']} ${styles.cpp}`,
    },
    {
        label:"MySQL",
        percentage:75,
        style:`${styles['progress-line']} ${styles.sql}`,
    },
    {
        label:"PHP",
        percentage:50,
        style:`${styles['progress-line']} ${styles.php}`,
    },
];

export default function Skills() {

    const [isInterested, setIsInterested] = useState(false);
    const sectionRef = useRef(null);

    useEffect(()=>{
        const options = {
            rootMargin:'0px',
            threshold:0.15,
        };

        const handleIntersection = (entries, observer) =>{
            const [entry] = entries;
            if(entry.isIntersecting){
                setIsInterested(true);
                observer.unobserve(entry.target);
            }
        }

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(sectionRef.current);

        return () =>{
            observer.disconnect();
        };
    },[])

  return (
    <section id="skills" className={styles.skills} ref = {sectionRef}>
        <Reveal>
        <div className="container">
            <div className={styles.title}>
                <h2>
                    <span>My</span> Skills
                </h2>
                <hr/>
            </div>
            <div className={`grid ${styles["skills-grid"]}`}>
                <div className={styles.content}>
                    <h1>
                        In <span>Designing</span><br/>
                        And <span>Developing</span>
                    </h1>
                    <p>
                        Everyday is a new challenge, and I'm trying to gain more knowledge and experience. Learning new technologies has always been interesting to me. As technology is evolving so fast, I try to keep myself up to date.
                    </p>
                </div>
                <div className={styles["skills-bars"]}>
                    {skillsData.map((skill)=>(
                        <SkillsBar 
                        key={skill.label} 
                        label={skill.label} 
                        percentage={skill.percentage} 
                        style={ isInterested ?skill.style : ''}/>
                    ))}
                </div>
            </div>
        </div>
        {/* <div className={styles.bottom}>
            <div className={`${styles.flex} container`}>
                <div>
                    <h3>I'm available for work</h3>
                </div>
                <div>
                <a href="#contact">Contact Me</a>
                </div>
            </div>
        </div> */}
        </Reveal>
    </section>
  )
}

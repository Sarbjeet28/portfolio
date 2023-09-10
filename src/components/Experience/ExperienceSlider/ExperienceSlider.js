import React, { useEffect, useState } from 'react'
import styles from './ExperienceSlider.module.css'
import {HiOutlineArrowNarrowLeft,HiOutlineArrowNarrowRight} from "react-icons/hi"

const ExperienceSlider = ({experience, nextExperience, previousExperience}) => {

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() =>{
        setFadeIn(true)
    },[experience])

    const handlePrevious = () =>{
        setFadeIn(false);
        setTimeout(previousExperience,500);
    }

    const handleNext = () =>{
        setFadeIn(false);
        setTimeout(nextExperience, 500);
    }

  return (
    <div className={styles.content}>
        <div className={`${styles.experience} ${fadeIn ? styles["fade-in"] : ''}`}>
            <p className={styles.name}>{experience.name}</p>
            <p className={styles.message}>{experience.message}</p>
            <p className={styles.message}>Certificate :<a href={experience.url}> Link</a></p>
        </div>
        <div className={styles.buttons}>
            <button className={styles["slider-button"]}>
                <HiOutlineArrowNarrowLeft size={30} onClick={handlePrevious}/>
            </button>
            <button className={styles["slider-button"]}>
                <HiOutlineArrowNarrowRight size={30} onClick={handleNext}/>
            </button>
        </div>
    </div>
  )
}

export default ExperienceSlider;

import React, { useState } from 'react'
import styles from './Experience.module.css'
import Reveal from '../Reveal/Reveal';
import ExperienceSlider from './ExperienceSlider/ExperienceSlider';
import experienceData from '../ExperienceData';

function Experience() {

    const [curIndex, setCurIndex] = useState(0);

    const nextTestimonial = () =>{
        setCurIndex((nextIndex) =>
        nextIndex === experienceData.length -1 ? 0 : nextIndex + 1
        );
    };

    const previousTestimonial = () =>{
        setCurIndex((prevIndex) =>
        prevIndex === 0 ? experienceData.length - 1 : prevIndex - 1
        );
    };

  return (
    <section id="portfolio" className={styles["testimonial-slider"]}>
        <Reveal>
            <div className="container">
                <h2>Experience</h2>
                {/* <h1>What people say</h1> */}
                <ExperienceSlider
                experience={experienceData[curIndex]}
                nextExperience={nextTestimonial}
                previousExperience={previousTestimonial}
                />
            </div>
        </Reveal>
    </section>
  );
};

export default Experience;

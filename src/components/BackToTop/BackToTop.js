import React, { useEffect, useState } from 'react'
import styles from './BackToTop.module.css'
import { HiArrowNarrowUp } from 'react-icons/hi';

function BackToTop() {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () =>{
        console.log(window.pageYOffset);
        if(window.pageYOffset > 500){
            setShowButton(true);
        }
        else{
            setShowButton(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll);

        return () =>{
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    }

  return (
    <button className={`${styles.button} ${showButton ? styles.show : ""}`} onClick={scrollToTop}> 
        <HiArrowNarrowUp size={20} className={styles.icon}/>
    </button>
  )
}

export default BackToTop;

import React, { useEffect, useState } from 'react'
import styles from './NavBar.module.css'
import NavBarLinks from './NavbarLinks/NavBarLinks'

const navLinks = [
    {id:"home", label:"Home"},
    {id:"about", label:"About"},
    {id:"skills", label:"Skills"},
    {id:"portfolio", label:"Portfolio"},
    {id:"experience", label:"Experience"},
    {id:"contact", label:"Contact"},
]
function NavBar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showLinks, setShowLinks] = useState(false);
    const [isScrolled, setisScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() =>{
        const handleResize = () =>{
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return() =>{
            window.removeEventListener('resize', handleResize);
        };
    },[windowWidth]);

    useEffect(() =>{
        const handleScroll = () =>{
            setisScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll" , handleScroll);

        return () =>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() =>{
        const options = {
            root:null,
            rootMargin:"0px",
            threshold: 0.4,
        };

        const handleIntersect = entries =>{
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    setActiveSection(entry.target.id);
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersect,options);

        const sections = document.querySelectorAll("section");

        sections.forEach(section =>{
            observer.observe(section);
        })
        return () =>{
            sections.forEach(section =>{
                observer.unobserve(section);
            })
        }
    })

    const handleSectionClick = (e) =>{
        e.preventDefault();
        const sectionId = e.target.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        if(section){
            const navbarHeight = document.querySelector("nav").offsetHeight;
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({
                top:sectionTop,
                behavior:"smooth",
            });
        }
    };

    const toggleLinks = () =>{
        setShowLinks(!showLinks);
    }
  return (
    <header className={styles.header}>
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
            <div className="container">
                <div className={styles["navbar-wrapper"]}>
                    <div>
                        <a href="index.html" className={styles.logo}>
                            <img style={{width: 40, height: 40, objectFit:'cover', borderRadius: 50}} src="./images/logo.webp" alt="Gurjeet Kaur"/>
                            <div className={styles["logo-inner"]}>
                                <span classNmae={styles.top}>Sarbjeet Kaur</span>
                                <br/>
                                <span className={styles.bottom}>Software Developer</span>
                            </div>
                        </a>
                    </div>
                    <div className={`${styles["navbar-links"]} ${showLinks ? styles.show : ""}`}>
                        <ul>
                            {navLinks.map((link) =>(
                                <NavBarLinks
                                key={link.id}
                                href={`#${link.id}`}
                                label={link.label}
                                onClick={handleSectionClick}
                                active = {activeSection === link.id}
                                />
                            ))}
                        </ul>
                    </div>
                    {windowWidth <=890 && (
                    <div className={` ${styles["toggle-button"]} ${showLinks ? styles.open : ""}`} onClick ={toggleLinks}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                    )}
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar;
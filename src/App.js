import './App.css';
import About from './components/About/About';
import BackToTop from './components/BackToTop/BackToTop';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
// import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills/>
        <Portfolio/>
        <Experience/>
        <Contact/>
      </main>
      <Footer/>
      <BackToTop/>
    </div>
  );
}

export default App;

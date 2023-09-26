import './App.css';
import MainContent from './Layout/MainContent';
import Nav from "./components/Nav"
import Projects from "./Layout/Projects"
import Contact from "./Layout/Contact"
import Footer from "./components/Footer"
import Skillset from './Layout/Skillset'
import ScrollToTopBtn from './components/ScrollToTopBtn';
import { Fade } from "react-awesome-reveal"
import Services from './Layout/Services';
const cert = '/meta-front-end-developer-certificate.png'


function App() {
  return (
    <div className="App">
      <Nav />
      <Fade triggerOnce={true}>

        <MainContent />
        <Projects />
        <Skillset cert={cert} />
        <Services />
        <Contact />
      </Fade>
      <ScrollToTopBtn />
      <Footer />
      

    </div>
  );
}

export default App;

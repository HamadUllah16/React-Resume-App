import './App.css';
import MainContent from './components/MainContent';
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTopBtn from './components/ScrollToTopBtn';
import { Fade } from "react-awesome-reveal"


function App() {
  return (
    <div className="App">
      <Nav />
      <Fade>

        <MainContent />
        <Projects />
        <Contact />
        <ScrollToTopBtn />

      </Fade>
      <Footer />

    </div>
  );
}

export default App;

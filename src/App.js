import './App.css';
import MainContent from './components/MainContent';
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTopBtn from './components/ScrollToTopBtn';


function App() {
  return (
    <div className="App">
      <Nav />
      <MainContent />
      <Projects />
      <Contact />
      <ScrollToTopBtn />
      <Footer />

    </div>
  );
}

export default App;

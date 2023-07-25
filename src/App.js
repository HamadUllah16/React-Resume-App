import './App.css';
import MainContent from './components/MainContent';
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <Nav />
      <MainContent />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

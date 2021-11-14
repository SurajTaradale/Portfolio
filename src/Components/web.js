import Home from "../Components/Home";
import About from "../Components/About";
import BootstrapNavbar from "../Components/NavBar";
import Skills from "../Components/Skills";
import Learn from "./Learn";
import Contact from './Contact';
import '../App.css';
function Web() {

  return (
    <div className="container-fluid App">
      <BootstrapNavbar />
      <Home />
      <About />
      <Skills />
      <Learn />
      <Contact />
    </div>

  );
}

export default Web;
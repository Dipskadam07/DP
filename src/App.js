import Navbar from "./components/NavBar/navbar.js";
import Intro from "./components/NavBar/Intro/intro";
import Skills from "./components/Skills/skills.js";
import Works from "./components/Works/works.js";
import Experience from "./components/Experience/exper.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills />
      <Works />
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

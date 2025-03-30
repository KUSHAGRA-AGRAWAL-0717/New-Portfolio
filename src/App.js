import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/Skills/skill";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import ExperienceSection from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Intro id="home" />
        <Skill id="skills" />
        <ExperienceSection id="experience" />
        <Works id="works" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
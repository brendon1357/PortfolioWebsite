import "./App.css";
import NavBar from "./NavBar.js";
import FeaturedProjects from "./FeaturedSection.js";
import AboutSectionDisplay from "./AboutSection.js";
import SkillsDisplay from "./SkillsSection.js";
import ForFunProjects from "./ForFunSection.js";
import ContactDisplay from "./ContactSection.js";

// Main function to pass everything to render
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="imagedisplay">
        <h1>My Portfolio</h1>
      </div>
      <AboutSectionDisplay />
      <SkillsDisplay />
      <FeaturedProjects />
      <ForFunProjects />
      <ContactDisplay />
      <div class="backtotop">
        <a href="#" style={{ textDecoration: "none", cursor: "pointer" }}>
          <div id="logo"></div>
        </a>
      </div>
    </div>
  );
}

export default App;

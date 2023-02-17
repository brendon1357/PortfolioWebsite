import "./App.css";
import NavBar from "./NavBar.js";
import FeaturedProjects from "./FeaturedSection.js";
import SkillsDisplay from "./SkillsSection.js";
import ForFunProjects from "./ForFunSection.js";
import ContactDisplay from "./ContactSection.js";
import Footer from "./Footer.js";
import Home from "./Home.js";

// Main function to pass everything to render
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <FeaturedProjects />
      <ForFunProjects />
      <SkillsDisplay />
      <ContactDisplay />
      <Footer />
    </div>
  );
}

export default App;

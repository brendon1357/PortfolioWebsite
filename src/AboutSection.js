function AboutSectionDisplay() {
  return (
    <div className="container" style={{ maxWidth: "1500px" }}>
      <div className="aboutsection">
        <div className="anchor" id="jumptoabout"></div>
        <h1>About Me</h1>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-10">
            <p className="lead" style={{ fontFamily: "Arial", fontSize: "1rem" }}>
              My name is Brendon and I am a 22-year-old <span style={{ fontWeight: "bold" }}>Memorial University of Newfoundland</span> senior Computer Science
              student. I am currently looking for <span style={{ fontWeight: "bold" }}>full-time employment</span> for when I finish school at the end of April
              2023. I have many interests in the field of computer science. My main interests reside in software development/engineering and web development. I
              have built projects in the areas of{" "}
              <span style={{ fontWeight: "bold" }}> AI, Networking, 2D Game Development, Cryptography, Web Development, </span> and more. Many of these projects
              can be viewed directly on my portfolio below or on my Github. Three of the projects I am most proud of include a computerized version of the
              boardgame Kingdomino, a 2D video game called Planet Hopper which was made with a game engine created fully from scratch, and a fullscale chatroom
              desktop application. These projects are outlined below and they each have video demonstrations.
            </p>
            <p className="lead" style={{ fontFamily: "Arial", fontSize: "1rem" }}>
              Details about my education, professional achievements, and work experience can be seen on my <span style={{ fontWeight: "bold" }}>LinkedIn</span>{" "}
              page. And source code for all of my public projects can be viewed on my
              <span style={{ fontWeight: "bold" }}> Github.</span>
            </p>
          </div>
        </div>
        <div className="links">
          <span>
            <a href="https://www.linkedin.com/in/brendon-thorne-70b290195/" target="_blank" rel="no-referrer" id="linkedin">
              LinkedIn Page
            </a>
          </span>
          <span>
            <a href="https://github.com/brendon1357" target="_blank" rel="no-referrer" id="github">
              Github Page
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionDisplay;

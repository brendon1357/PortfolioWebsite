function openLink(url) {
	window.open(url, "_blank");
}

function AboutSection() {
	return (
		<div className="aboutSectionContainer">
			<div className="aboutSection">
				<div className="anchor" id="jumptoabout"></div>
				<h1>About Me</h1>
				<div className="aboutInfo">
					<p style={{ fontFamily: "Arial", fontSize: "1rem", color: "white", marginTop: "15px", marginBottom: "20px" }}>Hello! My name is Brendon Thorne, and I'm a 23-year-old software developer with a passion for programming and building software. I am currently working as a software developer for PragmaClin, a startup company that is building digital solutions through software and machine learning to help people with Parkinson's disease.</p>
					<p style={{ fontFamily: "Arial", fontSize: "1rem", color: "white", marginTop: "25px", marginBottom: "20px" }}>In my free time I love to learn about new technologies and create personal projects ranging from 2D video games, a password manager, AI systems, and a real-time chatroom. I am currently working on a budget manager application that will allow users to create personalized budget plans, track stocks, create savings goals, and more.</p>
					<p style={{ fontFamily: "Arial", fontSize: "1rem", color: "white", marginTop: "25px", marginBottom: "20px" }}>
						During my time at university, I had the honor of being on the Dean's List and was the recipient of two scholarships, a testament to my dedication and commitment to my studies. While I was a student I had the opportunity to work at the National Research Council of Canada, where I developed software for monitoring sensors on marine vessels. This experience allowed me to apply my programming skills in a real-world setting, and it deepened my interest in pursuing a career in
						software development.
					</p>
				</div>
				<div className="links">
					<span>
						<img src="./Images/linkedinLogo.png" alt="Linkedin" onClick={() => openLink("https://www.linkedin.com/in/brendon-thorne-70b290195/")}></img>
					</span>
					<span>
						<img src="./Images/githubLogo.png" alt="Github" onClick={() => openLink("https://github.com/brendon1357")}></img>
					</span>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;

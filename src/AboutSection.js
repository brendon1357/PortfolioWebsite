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
					<p style={{ fontFamily: "Arial", fontSize: "1rem", color: "white", marginTop: "15px", marginBottom: "20px" }}>
						Hello! My name is Brendon Thorne, and I'm a 23-year-old computer science graduate with a passion for programming and building software. Throughout
						my bachelor's degree I have developed a strong interest in cybersecurity, machine learning, and artificial intelligence. I like creating intelligent
						software systems and I enjoy learning about how to create secure network communications.
					</p>
					<p style={{ fontFamily: "Arial", fontSize: "1rem", color: "white", marginTop: "25px", marginBottom: "20px" }}>
						During my time at university, I had the honor of being on the Dean's List and was the recipient of two scholarships, a testament to my dedication
						and commitment to my studies.
					</p>
					<p style={{ fontFamily: "Arial", fontSize: "1rem", color: "white", marginTop: "25px", marginBottom: "50px" }}>
						I've had the opportunity to work at the National Research Council of Canada, where I developed software for monitoring sensors on marine vessels.
						This experience allowed me to apply my programming skills in a real-world setting, and it deepened my interest in pursuing a career in software
						development.
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

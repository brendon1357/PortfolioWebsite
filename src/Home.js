function Home() {
	return (
		<div className="imagedisplay">
			<div className="centerdiv">
				<h1 style={{ color: "white" }}>BRENDON THORNE</h1>
				<h1 style={{ color: "rgba(196, 196, 196, 0.8)", marginTop: "-10px" }}>SOFTWARE DEVELOPER</h1>
				<p className="lead" style={{ fontFamily: "Arial", fontSize: "1rem", color: "white", marginTop: "25px", marginBottom: "35px" }}>
					My name is Brendon and I am a 23-year-old <span style={{ fontWeight: "bold" }}>Memorial University of Newfoundland</span> senior Computer Science
					student. I have a passion for software development and love creating and building practical things. I have built projects in the areas of
					<span style={{ fontWeight: "bold" }}> AI, Networking, 2D Game Development, Cryptography, Web Development, </span> and more.
				</p>
				<div className="links">
					<span>
						<a href="https://www.linkedin.com/in/brendon-thorne-70b290195/" target="_blank" rel="no-referrer">
							<img src="./Images/linkedinLogo.png"></img>
						</a>
					</span>
					<span>
						<a href="https://github.com/brendon1357" target="_blank" rel="no-referrer">
							<img src="./Images/githubLogo.png"></img>
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Home;

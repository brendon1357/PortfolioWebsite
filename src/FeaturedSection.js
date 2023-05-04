import { CustomVideoCard } from "./DisplayCard.js";

function FeaturedProjects() {
	return (
		<div className="featuredprojects">
			<div className="anchor" id="jumptofeatured"></div>
			<h1>Featured Projects</h1>
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-4 mt-2">
						<PlanetHopperCard />
					</div>
					<div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-4 mt-2">
						<StarcraftCard />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-4 mt-2">
						<CourseManagementCard />
					</div>
					<div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-4 mt-2">
						<ChatroomCard />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-4 mt-2">
						<PasswordManagerCard />
					</div>
					<div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-4 mt-2">
						<KingdominoCard />
					</div>
				</div>
			</div>
			<div style={{ paddingTop: "40px" }}></div>
		</div>
	);
}

function KingdominoCard() {
	return (
		<CustomVideoCard
			frameTitle="Kingdomino Video"
			videoSrc="https://www.youtube.com/embed/SAC4lelmnvo;&autoplay=1&mute=1"
			cardTitle="Kingdomino Computerized"
			cardText="This is a computerized version of the award winning board game Kingdomino. This project was created in my Software Engineering class by a group of
					four people which included myself and three of my fellow classmates. The game was made using Java and features the ability to play against AIs as well
					as the ability to save a current game state to return to later."
			URL="https://youtu.be/SAC4lelmnvo"
			buttonText="Youtube Video"
			techUsed="Technologies used: Java, Swing"
		/>
	);
}

function ChatroomCard() {
	return (
		<CustomVideoCard
			frameTitle="Chatroom Video"
			videoSrc="https://www.youtube.com/embed/7kmNrBKYKEc;&autoplay=1&mute=1"
			cardTitle="Online Chatroom"
			cardText="An online chatroom that was made in Java using Swing for the GUI. The server for the chatroom is hosted on an AWS E2 instance and allows connections
					through SSL sockets. This was my first personal project tackling networking. I learned a lot about how sockets work and how to make communcation
					between server and client secure using the SSL protocol."
			URL="https://youtu.be/7kmNrBKYKEc"
			buttonText="Youtube Video"
			techUsed="Technologies used: Java, Swing, AWS, SSL/TLS"
		/>
	);
}

function PlanetHopperCard() {
	return (
		<CustomVideoCard
			frameTitle="Planet Hopper Trailer"
			videoSrc="https://www.youtube.com/embed/ZJjWABGwFYo;&autoplay=1&mute=1"
			cardTitle="Planet Hopper"
			cardText="A 2D video game built with C++ and the SFML graphics library. The game was built as a collaborative effort where my team used an Agile development 
			process to set goals and meet those goals each project sprint. I personally developed game features including lighting, raycasting, saving/loading, 
			collisions, weapons, steering, and more. The game engine was developed from scratch."
			URL="https://youtu.be/ZJjWABGwFYo"
			buttonText="Youtube Video"
			techUsed="Technologies used: C++, SFML"
		/>
	);
}

function StarcraftCard() {
	return (
		<CustomVideoCard
			frameTitle="Starcraft AI Trailer"
			videoSrc="https://www.youtube.com/embed/E7R422XH-S8;&autoplay=1&mute=1"
			cardTitle="Starcraft Bot"
			cardText="A Starcraft bot built with C++ and BWAPI. I developed the bot individually and implemented intelligent features such as scouting, 
			base defense, resource gathering, building, and attack conditions. My bot is able to successfully defeat the default Starcraft AI and compete against other bots. 
			I specialized in creating a fast expansion bot with initial static defenses."
			URL="https://youtu.be/E7R422XH-S8"
			buttonText="Youtube Video"
			techUsed="Technologies used: C++, BWAPI"
		/>
	);
}

function PasswordManagerCard() {
	return (
		<CustomVideoCard
			frameTitle="Password Manager Video"
			videoSrc="https://www.youtube.com/embed/QK76yH1T2nk;&autoplay=1&mute=1"
			cardTitle="Password Manager"
			cardText="A desktop password management application where users can create accounts and generate randomized, secure passwords. 
			I built the project with security in mind and I am using password hashing and salting techniques to protect user passwords. 
			The application uses a MySQL database and the Fernet library to encrypt generated passwords. The BCrypt library is used for hashing and salting."
			URL="https://youtu.be/QK76yH1T2nk"
			buttonText="Youtube Video"
			techUsed="Technologies used: Python, MySQL, CustomTkinter, Fernet, BCrypt, AWS, SSL/TLS"
		/>
	);
}

function CourseManagementCard() {
	return (
		<CustomVideoCard
			frameTitle="Course Tool Video"
			videoSrc="https://www.youtube.com/embed/AWJgOOYRaSU;&autoplay=1&mute=1"
			cardTitle="Course Management Tool"
			cardText="A course management web application for students to register for courses and manage existing courses. 
			Students can create accounts and then view 1000+ courses from an actual university and register for them. 
			Students can view their schedule and time slots, they can access/update personal information, and they can view their previous grades. "
			URL="https://youtu.be/AWJgOOYRaSU"
			buttonText="Youtube Video"
			techUsed="Technologies used: JavaScript, jQuery, Express, Node.js, MongoDB, Mocha"
		/>
	);
}

export default FeaturedProjects;

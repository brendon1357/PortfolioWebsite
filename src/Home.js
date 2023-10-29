import { TypeAnimation } from "react-type-animation";

function Home() {
	return (
		<div className="imagedisplay">
			<div className="centerdiv">
				<h1 id="openingHeader">Digital portfolio of</h1>
				<h1 id="nameHeader">Brendon Thorne</h1>
				<TypingComponent />
			</div>
		</div>
	);
}

function TypingComponent() {
	return (
		<TypeAnimation
			sequence={["Software Developer", 2000, "Tech Enthusiast", 2000, "Computer Science Grad", 2000]}
			wrapper="span"
			cursor={true}
			repeat={Infinity}
			className="typingAnimation"
		/>
	);
}

export default Home;

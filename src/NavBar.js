import { useState } from "react";

// Custom navbar will appear at top of screen
function NavBar() {
	const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

	const toggleMenu = () => {
		setIsMenuCollapsed(!isMenuCollapsed);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
			<div className="container">
				<a className="navbar-brand" id="brand" href="">
					Brendon Thorne
				</a>
				<button
					className="navbar-toggler"
					type="button"
					onClick={toggleMenu}
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded={!isMenuCollapsed}
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={`collapse navbar-collapse ${!isMenuCollapsed ? "show" : ""}`} id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto">
						<NavItem link="#" text="Home" onClick={toggleMenu} />
						<NavItem link="#jumptoabout" text="About" onClick={toggleMenu} />
						<NavItem link="#jumptoskills" text="Skills" onClick={toggleMenu} />
						<NavItem link="#jumptofeatured" text="Projects" onClick={toggleMenu} />
						<NavItem link="#jumptocontact" text="Contact" onClick={toggleMenu} />
					</ul>
				</div>
			</div>
		</nav>
	);
}

// Clickable link for navbar
function NavItem({ link, text, onClick }) {
	return (
		<li className="nav-item">
			<a className="nav-link" href={link} onClick={onClick}>
				{text}
			</a>
		</li>
	);
}

export default NavBar;

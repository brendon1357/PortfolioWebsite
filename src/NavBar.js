// Custom navbar will appear at top of screen
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <a className="navbar-brand" id="brand" href="">
          Brendon Thorne
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <NavItem link="#" text="Home" />
            <NavItem link="#jumptoabout" text="About" />
            <NavItemDropdown text="Projects" />
            <NavItem link="#jumptocontact" text="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Clickable link for navbar
function NavItem({ link, text }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link}>
        {text}
      </a>
    </li>
  );
}

// Clickable link that will open a dropdown menu with more links
function NavItemDropdown({ text }) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {text}
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <DropdownItem link="#jumptofeatured" text="Featured" />
        <div className="dropdown-divider"></div>
        <DropdownItem link="#jumptoforfun" text="For Fun" />
      </ul>
    </li>
  );
}

// Clickable link for the dropdown menu
function DropdownItem({ link, text }) {
  return (
    <li>
      <a className="dropdown-item" href={link}>
        {text}
      </a>
    </li>
  );
}

export default NavBar;

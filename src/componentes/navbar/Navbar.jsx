import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top " id="navinha">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" id="nav-iuri"></a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto nav-links-cima">
            <a className="nav-link biubiu" href="#sobre-id">
              <span className="">Sobre</span>
            </a>
            <a className="nav-link" href="#skills-id">
              <span className="biubiu">Skills</span>
            </a>
            <a className="nav-link" href="#portfolio-id">
              <span className="biubiu">Portfolio</span>
            </a>
            <a className="nav-link" href="#contato-id">
              <span className="biubiu">Contato</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

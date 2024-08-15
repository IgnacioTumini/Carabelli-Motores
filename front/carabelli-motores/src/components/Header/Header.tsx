import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import logo from "../../../public/WEB CARABELLI.png";

function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <div>
          <img src={logo} alt="Logo de carabelli motores" className="logo" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="letras_nav">
              Inicio
            </Nav.Link>
            <Nav.Link href="#link" className="letras_nav">
              Nosostros
            </Nav.Link>
            <NavDropdown
              title="Servicios"
              id="basic-nav-dropdown"
              className="letras_nav"
            >
              <NavDropdown.Item href="#action/3.1" className="letras_nav">
                Filtros
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="letras_nav">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="letras_nav">
                Something
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

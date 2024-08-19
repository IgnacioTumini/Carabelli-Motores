import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import logo from "../../../public/WEB CARABELLI.png";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="navbar ">
        <Container className=" w-100">
          <img src={logo} alt="Logo de carabelli motores" className="logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="#home" className="text-white">
                Inicio
              </Nav.Link>
              <Nav.Link href="#productos" className="text-white">
                Productos
              </Nav.Link>
              <NavDropdown
                title="Servicios"
                id="basic-nav-dropdown"
                className="letras_nav"
              >
                <NavDropdown.Item href="#action/3.1" className="text-white">
                  Filtros
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="text-white">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="text-white">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className="text-white">
                Galeria
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Nosostros
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="linea"></div>
    </div>
  );
}

export default Header;

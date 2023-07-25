import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export const Header = () => {
  return (
    <Navbar collapseOnSelect fixed='top' expand="lg" data-bs-theme="light" style={{"backgroundColor":"#f7a1d9"}}>
      <Container>
        <Navbar.Brand href="#home">
            <img src="/img/xmi_logo_3.png" alt="XMI" style={{"maxHeight": "50px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav style={{ "fontSize": "20px", "fontFamily": "Oswald, arial"}}>
            <Nav.Link href="/" style={{"color": "white" }}>Nosotros</Nav.Link>
            <Nav.Link eventKey={2} href="/servicios" style={{"color": "white" }}>Servicios</Nav.Link>
            <Nav.Link eventKey={3} href="/tecnologia" style={{"color": "white" }}>Tecnología</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

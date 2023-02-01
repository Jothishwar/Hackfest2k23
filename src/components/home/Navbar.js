import './home.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './logo.jpg';
import {LinkContainer} from 'react-router-bootstrap';

function Homenavbar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <LinkContainer to='/home'>
            <Navbar.Brand>
                <img src={logo} alt='logo' width={'150px'} height={'50px'} />
            </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  EduSync
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to='/home'><Nav.Link>Home</Nav.Link></LinkContainer>
                  
                  <NavDropdown
                    title="Menu"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <LinkContainer to='/material'><NavDropdown.Item> Course Material Upload  </NavDropdown.Item></LinkContainer>
                    <LinkContainer to='/analysis'><NavDropdown.Item href="https://63d90a1168f92d0147c0e08e--steady-dasik-80f6aa.netlify.app/" target="__blank">Performance Analysis</NavDropdown.Item></LinkContainer>
                    <LinkContainer to='/certificates'><NavDropdown.Item>Certificates Upload</NavDropdown.Item></LinkContainer>
                    <LinkContainer to='/assignments'><NavDropdown.Item>Assignments</NavDropdown.Item></LinkContainer>
                    <LinkContainer to='/roadmap'><NavDropdown.Item>Roadmaps</NavDropdown.Item></LinkContainer>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Homenavbar;
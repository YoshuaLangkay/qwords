import { Container,Navbar,NavDropdown,Nav, Row, Col, Dropdown,DropdownButton } from "react-bootstrap";

function Menu(){
    return(
        < >
            <Navbar className="nav" bg="light" expand="lg">
                    <Navbar.Brand href="#home">Fruits</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <Row style={{
                            width:'600px'
                        }}  className="d-flex fluid">
                                <Col>
                                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                                </Col>

                                <Col>
                                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                                </Col>
                            </Row>
                            </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </>
    );
}

export default Menu;


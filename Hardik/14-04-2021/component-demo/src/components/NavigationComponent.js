import React from 'react';
import { Nav, Navbar, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';
import ClockComponent from './ClockComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationComponent extends React.Component {
    render() {
        // return <h1>Greeting of the Day</h1>;
        return (
            // <style>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Navigation Bar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            <ClockComponent />
                            {/* <b><Nav.Link>Timer : {new Date().toLocaleTimeString()}</Nav.Link></b> */}
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            // </style>
            );
    }
}

export default NavigationComponent;

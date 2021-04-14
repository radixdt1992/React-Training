import React from "react";
// import { Nav } from "react-bootstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";
import '../sidebar.css';

class SideBarComponent extends React.Component {
    render() {
        return (
            //     <Nav className="col-md-12 d-none d-md-block bg-dark sidebar"
            //         activeKey="/home"
            //         onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            //         bg="dark" variant="dark">
            //         <div className="sidebar-sticky"></div>
            //         <Nav.Item>
            //             <Nav.Link href="/home">Active</Nav.Link>
            //         </Nav.Item>
            //         <Nav.Item>
            //             <Nav.Link eventKey="link-1">Link 1</Nav.Link>
            //         </Nav.Item>
            //         <Nav.Item>
            //             <Nav.Link eventKey="link-2">Link 2</Nav.Link>
            //         </Nav.Item>
            //         <Nav.Item>
            //             <Nav.Link eventKey="disabled" disabled>
            //                 Disabled
            // </Nav.Link>
            //         </Nav.Item>
            //     </Nav>

            <div className="sidebar">
                {/* <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a> */}
                <Link to="/">
                    Home
                </Link>
                <Link to="/post">
                    Posts
                </Link>
                <Link to="/login">
                    Log in
                </Link>
                <Link to="/parent">
                    Parent Component
                </Link>
            </div>
        );
    }
}


export default SideBarComponent;
import React from "react";
// import { Nav } from "react-bootstrap";
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

            <div class="sidebar">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        );
    }
}


export default SideBarComponent;
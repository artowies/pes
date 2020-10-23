import React from "react";
import img from './21.jpg'
import {Navbar,Nav,NavDropdown,NavLink,Form,FormControl,Button} from "react-bootstrap";


function Nbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img src={img}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink href="/">Home</NavLink>
                        <Nav.Link href="/ourmeet">our meet</Nav.Link>
                        <Nav.Link href="/Oursuffering">Our suffering</Nav.Link>
                        <Nav.Link href="/Ourmassage">Our massage</Nav.Link>
                        <Nav.Link href="/Ourencounters">Our encounters</Nav.Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
)
}
export default Nbar;
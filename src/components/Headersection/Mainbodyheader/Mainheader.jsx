import React from "react";
import {Jumbotron,Navbar,Nav,Form,FormControl,Button,Image} from "react-bootstrap";
import "./Mainheader.css";

export const Mainheader = () => {
    return(

        <div>
            <Jumbotron>
                <marquee behavior="alternate" direction="up" scrollamount="150%"><h1>Pickupbiz</h1></marquee>
                    <Navbar bg="dark" variant="dark" className="main-header--position">
                    <Navbar.Brand href="#home"><Image src="Asets/image2.jpg" className="main-header--image" /> Pickupbiz</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                    </Navbar>
            </Jumbotron>
        </div>
    );
};
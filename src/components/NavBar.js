import React from 'react';
import {Navbar} from 'react-bootstrap';
const NavBar = props => {
    return (

        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#brand">Nobo</a>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    
        
    );
};

export default NavBar;

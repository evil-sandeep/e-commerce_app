import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" bg="dark" variant='dark' collapseOnSelect >
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand>Easy Shop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <LinkContainer to='/cart' className='ml-auto'>
                                <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa-user'></i> SignIn</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>  
                    
                </Container>
            </Navbar>
        </header>
    )
}

export default Header

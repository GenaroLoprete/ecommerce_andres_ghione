import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from "reactstrap";
import CartWidget from "../cartWidget/CartWidget";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Navbar color="light" expand="md" light>
                <Link style={{ textDecoration: 'none' }} to="/"><NavbarBrand>TUTI-TIENDA</NavbarBrand></Link>
                <CartWidget/>
                <NavbarToggler onClick={function noRefCheck() {
                }}/>
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <UncontrolledDropdown inNavbar nav className="px-5">
                            <DropdownToggle caret nav>
                                Categorías
                            </DropdownToggle>
                            <DropdownMenu>
                                <Link style={{ textDecoration: 'none' }} to="/category/1"> <DropdownItem>Home appliances</DropdownItem> </Link>
                                <Link style={{ textDecoration: 'none' }} to="/category/2"> <DropdownItem>Food</DropdownItem> </Link>
                                <Link style={{ textDecoration: 'none' }} to="/category/3"> <DropdownItem>Electronics</DropdownItem> </Link>
                                <Link style={{ textDecoration: 'none' }} to="/category/4"> <DropdownItem>Frozen</DropdownItem> </Link>
                                <Link style={{ textDecoration: 'none' }} to="/category/5"> <DropdownItem>Cleaning</DropdownItem> </Link>
                                <Link style={{ textDecoration: 'none' }} to="/category/6"> <DropdownItem>Drinks</DropdownItem> </Link>
                                <Link style={{ textDecoration: 'none' }} to="/category/7"> <DropdownItem>Alcohol</DropdownItem> </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <div className="px-5">
                        <Button className='mx-2' color="primary">
                            Carrito&nbsp;
                            <CartWidget />
                        </Button>
                        <Button color="primary">Ingresar</Button>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;

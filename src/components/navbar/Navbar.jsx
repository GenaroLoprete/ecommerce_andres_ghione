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
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function NavBar() {
    return (
        <div>
            <Navbar color="light" expand="md" light>
                <Link style={{ textDecoration: 'none' }} to="/"><NavbarBrand>TUTI-TIENDA</NavbarBrand></Link>
                <FontAwesomeIcon icon={faShoppingBasket} />
                <NavbarToggler onClick={function noRefCheck() {
                }}/>
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <UncontrolledDropdown inNavbar nav className="px-5">
                            <DropdownToggle caret nav>
                                Categories
                            </DropdownToggle>
                            <DropdownMenu>
                                <Link style={{ textDecoration: 'none' }} to="/category/1"> <DropdownItem>Craft</DropdownItem> </Link>
                                <Link style={{ textDecoration: 'none' }} to="/category/2"> <DropdownItem>National</DropdownItem> </Link>
                                <Link style={{ textDecoration: 'none' }} to="/category/3"> <DropdownItem>International</DropdownItem> </Link>
                                <Link style={{ textDecoration: 'none' }} to="/category/4"> <DropdownItem>Others</DropdownItem> </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <div className="px-5">
                        <Link style={{ textDecoration: 'none' }} to="/cart">
                            <Button className='mx-2' color="primary">
                                Cart&nbsp;
                                <CartWidget />
                            </Button>
                        </Link>
                        <Button color="primary">Sign In</Button>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;

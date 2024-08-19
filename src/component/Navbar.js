import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';
import * as Icon from 'react-feather';
import {
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Nav,
    Collapse,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from "reactstrap";

import logodark from "../assets/images/logo-dark.png";
import logolight from "../assets/images/logo-light.png";
import Products from './Products';

export default function NavbarPage() {
    const [isOpen, setMenu] = useState(true);
    const [cart, setCart] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if the user is authenticated by looking for the token in localStorage
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const windowScroll = () => {
        const navbar = document.getElementById("navbar");
        if (navbar) {
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                navbar.classList.add("nav-sticky");
            } else {
                navbar.classList.remove("nav-sticky");
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", windowScroll);

        return () => {
            window.removeEventListener("scroll", windowScroll);
        };
    }, []);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const toggleMenu = () => {
        setMenu(!isOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setDropdownOpen(true);
    };

    const removeFromCart = (index, event) => {
        event.stopPropagation();
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
    };

    const handleCheckout = () => {
        alert("Proceeding to checkout!");
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg fixed-top sticky">
                <div className="container">
                    <NavbarBrand className="navbar-brand" to="/">
                        <img src={logodark} className="logo-light-mode" alt="" />
                        <img src={logolight} className="logo-dark-mode" alt="" />
                    </NavbarBrand>
                    <NavbarToggler className="navbar-toggler" onClick={toggleMenu}>
                        <Icon.Menu />
                    </NavbarToggler>

                    <Collapse className={`navbar-collapse ${isOpen === true ? 'hidden' : 'show'}`} id="navbarSupportedContent">
                        <Nav className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-navlist">
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={100} to="products" className="nav-link" href="#">Products</Link>
                            </NavItem>
                            <NavItem>
                                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <Icon.ShoppingCart />
                                        <span className="badge bg-primary rounded-pill ms-1">{cart.length}</span>
                                    </DropdownToggle>
                                    <DropdownMenu
                                        end
                                        className="p-3"
                                        style={{
                                            width: '320px',
                                            border: '1px solid #ddd',
                                            borderRadius: '8px',
                                            backgroundColor: '#f9f9f9',
                                            maxHeight: '400px',
                                            overflowY: 'auto'
                                        }}
                                    >
                                        {cart.length === 0 ? (
                                            <DropdownItem disabled>Your cart is empty</DropdownItem>
                                        ) : (
                                            <>
                                                {cart.map((item, index) => (
                                                    <DropdownItem
                                                        key={index}
                                                        className="d-flex justify-content-between align-items-start"
                                                        style={{
                                                            padding: '10px 0',
                                                            borderBottom: '1px solid #ddd'
                                                        }}
                                                    >
                                                        <img
                                                            src={`http://localhost:9000/uploads/images/${item.image}`}
                                                            alt={item.name}
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                objectFit: 'cover',
                                                                borderRadius: '8px',
                                                                marginRight: '15px'
                                                            }}
                                                        />
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{item.name}</div>
                                                            <div style={{ fontSize: '12px', color: '#777', marginBottom: '5px' }}>{item.description}</div>
                                                            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>${item.price.toFixed(2)}</div>
                                                        </div>
                                                        <Icon.X
                                                            size={24}
                                                            className="ms-2"
                                                            style={{ cursor: 'pointer', color: '#333' }}
                                                            onClick={(event) => removeFromCart(index, event)}
                                                        />
                                                    </DropdownItem>
                                                ))}
                                                <DropdownItem divider />
                                                <div className="d-flex justify-content-between align-items-center p-2" style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                                                    <span>Total:</span>
                                                    <span>${getTotalPrice()}</span>
                                                </div>
                                                <DropdownItem divider />
                                                <Button
                                                    color="primary"
                                                    className="w-100"
                                                    onClick={handleCheckout}
                                                    style={{
                                                        backgroundColor: '#007bff',
                                                        borderColor: '#007bff',
                                                        borderRadius: '8px'
                                                    }}
                                                >
                                                    Checkout
                                                </Button>
                                            </>
                                        )}
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </Nav>

                        <ul className="list-inline menu-social mb-0 ps-lg-4 ms-2">
                            {isAuthenticated ? (
                                <>
                                    <li className="list-inline-item">
                                        <Icon.User className="text-dark fw-semibold" />
                                    </li>
                                    <li className="list-inline-item ms-2">
                                        <Button color="primary" onClick={logout}>Logout</Button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="list-inline-item"><Link2 to="/auth-login" className="text-dark fw-semibold text-uppercase small">Login</Link2></li>
                                    <li className="list-inline-item ms-2"><Link2 to="/auth-signup" className="btn btn-primary text-uppercase">Sign Up</Link2></li>
                                </>
                            )}
                        </ul>
                    </Collapse>
                </div>
            </nav>

            <Products addToCart={addToCart} />
        </>
    );
}

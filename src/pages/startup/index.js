import React, { useState } from "react";
import {
    Col, Container, Row, Nav, CardBody, Card,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem
} from "reactstrap";

import { Link } from 'react-scroll';
import CountUp from 'react-countup';

import { Link as Link2 } from 'react-router-dom';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";


import News from "../../component/News";
import Contact from "../../component/Contact";
import AgencyProject from "../../component/AgencyProject";


// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import Laptop from '../../assets/images/bg/laptop.png';
import Image1 from '../../assets/images/bg/1.jpg';
import Image2 from '../../assets/images/bg/2.jpg';
import Image3 from '../../assets/images/bg/3.jpg';
import About from '../../assets/images/about.jpg';
import CTA from '../../assets/images/bg/cta.png';
import Map from '../../assets/images/map.png';
import Logo from '../../assets/images/logo-light.png';
import Logodark from "../../assets/images/logo-dark.png";
import Logolight from "../../assets/images/logo-light.png";

import Client1 from "../../assets/images/client/01.jpg";
import Client2 from "../../assets/images/client/02.jpg";
import Client3 from "../../assets/images/client/03.jpg";
import Client4 from "../../assets/images/client/04.jpg";



export default function Startup() {

    const [videoModal, setModal] = useState(false);
    const [isOpen, setMenu] = useState(true);

    window.addEventListener("scroll", windowScroll);

    const team = [
        {
            name: 'Cristino Murphy',
            profile: Client1,
            department: 'Management'
        },
        {
            name: 'Leosy Clony',
            profile: Client2,
            department: 'Management'
        },
        {
            name: 'Amanda Lair',
            profile: Client3,
            department: 'Management'
        },
        {
            name: 'Calvin Carlo',
            profile: Client4,
            department: 'Management'
        }
    ]

    /**
     * Window scroll 
     */
    function windowScroll() {
        const navbar = document.getElementById("navbar");

        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }

        const mybutton = document.getElementById("back-to-top");

        if (
            document.body.scrollTop >= 500 ||
            document.documentElement.scrollTop >= 500
        ) {
            mybutton.classList.add("block");
        } else {
            mybutton.classList.add("none");

        }
    }

    const toggleMenu = () => {
        setMenu(!isOpen)
    }

    return (
        <>
            <div>
                <nav id="navbar" className="navbar navbar-expand-lg nav-light fixed-top sticky">
                    <div className="container">
                        <NavbarBrand className="navbar-brand" href="/">
                            <span className="logo-light-mode">
                                <img src={Logodark} className="l-dark" alt="" />
                                <img src={Logolight} className="l-light" alt="" />
                            </span>
                            <img src={Logolight} className="logo-dark-mode" alt="" />
                        </NavbarBrand>
                        <NavbarToggler onClick={toggleMenu}>
                            <Icon.Menu />
                        </NavbarToggler>

                        <Collapse className={`navbar-collapse ${isOpen === true ? 'hidden' : 'show'}`} id="navbarSupportedContent">
                            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-navlist">
                                <NavItem>
                                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} className="nav-link">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" to="service" spy={true} smooth={true} duration={500} className="nav-link">Services</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" to="project" spy={true} smooth={true} duration={500} className="nav-link">Portfolio</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" to="pricing" spy={true} smooth={true} duration={500} className="nav-link">Pricing</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" to="team" spy={true} smooth={true} duration={500} className="nav-link">Team</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" to="blog" spy={true} smooth={true} duration={500} className="nav-link">Blog</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" className="nav-link" to="contact" spy={true} smooth={true} duration={500} >Contact Us</Link>
                                </NavItem>
                            </Nav>

                            <ul className="list-inline menu-social mb-0 ps-lg-4 ms-2">
                                <li className="list-inline-item"><Link2 to="/auth-login" className="btn btn-primary">Login</Link2></li>
                            </ul>
                        </Collapse>

                    </div>

                </nav>

                {/* Start Hero  */}
                <section className="swiper-slider-hero position-relative d-block vh-100" id="home">
                    <Swiper spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        loop
                        navigation
                        autoplay
                    >
                        <SwiperSlide className="d-flex align-items-center overflow-hidden">
                            <div className="slide-inner slide-bg-image d-flex align-items-center" style={{ background: `url(${Image1}) center center` }}>
                                <div className="bg-overlay"></div>
                                <Container>
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="title-heading text-center">
                                                <h1 className="display-5 text-white title-dark fw-bold mb-4">Business Planning, Strategies <br /> and Execution</h1>
                                                <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>

                                                <div className="mt-4 pt-2">
                                                    <Link2 to="#" className="btn btn-primary">Contact us</Link2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="d-flex align-items-center overflow-hidden">
                            <div className="slide-inner slide-bg-image d-flex align-items-center" style={{ background: `url(${Image2}) center center` }}>
                                <div className="bg-overlay"></div>
                                <Container>
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="title-heading text-center">
                                                <h1 className="display-5 text-white title-dark fw-bold mb-4">Financial Projections And Analysis <br /> Marketing</h1>
                                                <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>

                                                <div className="mt-4 pt-2">
                                                    <Link2 to="#" className="btn btn-primary">Get Started</Link2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="d-flex align-items-center overflow-hidden">
                            <div className="slide-inner slide-bg-image d-flex align-items-center" style={{ background: `url(${Image3}) center center` }}>
                                <div className="bg-overlay"></div>
                                <Container>
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="title-heading text-center">
                                                <h1 className="display-5 text-white title-dark fw-bold mb-4">International Business <br /> Opportunities</h1>
                                                <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>

                                                <div className="mt-4 pt-2">
                                                    <Link2 to="#" className="btn btn-primary">Get Started</Link2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                {/* FEATURES START  */}
                <section className="section bg-light" id="service">
                    <Container>
                        <div className="row justify-content-center">
                            <Col lg={12} >
                                <div className="features-absolute rounded shadow px-4 py-5 bg-white">
                                    <Row>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="d-flex features feature-primary">
                                                <div className="feature-icon text-center">
                                                    <i className="mdi mdi-language-php rounded h4"></i>
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="mt-0">Financial Planning</h5>
                                                    <p className="text-muted mb-0">Horem ipsum dolor consectetuer Lorem simply dummy orem commo.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 mt-4 pt-4 mt-sm-0 pt-sm-0">
                                            <div className="d-flex features feature-primary">
                                                <div className="feature-icon text-center">
                                                    <i className="mdi mdi-file-image rounded h4"></i>
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="mt-0">Quality Resourcing</h5>
                                                    <p className="text-muted mb-0">When an unknown printer took a galley of type and scrambled it.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 mt-4 pt-4 mt-lg-0 pt-lg-0">
                                            <div className="d-flex features feature-primary">
                                                <div className="feature-icon text-center">
                                                    <i className="uil uil-camera rounded h4"></i>
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="mt-0">Business Services</h5>
                                                    <p className="text-muted mb-0">It has survived not only five centuries but leap in typesetting.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 mt-4 pt-4">
                                            <div className="d-flex features feature-primary">
                                                <div className="feature-icon text-center">
                                                    <i className="mdi mdi-google-glass rounded h4"></i>
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="mt-0">Software And Research</h5>
                                                    <p className="text-muted mb-0">It was popularised with the release of Letraset sheets sit amet.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 mt-4 pt-4">
                                            <div className="d-flex features feature-primary">
                                                <div className="feature-icon text-center">
                                                    <i className="mdi mdi-source-commit rounded h4"></i>
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="mt-0">Travel And Aviation</h5>
                                                    <p className="text-muted mb-0">It is a long established fact that a reader will be distracted.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 mt-4 pt-4">
                                            <div className="d-flex features feature-primary">
                                                <div className="feature-icon text-center">
                                                    <i className="mdi mdi-code-tags rounded h4"></i>
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="mt-0">Healthcare Services</h5>
                                                    <p className="text-muted mb-0">A point of using lorem ipsum is that it has normal distribution.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                        </div>
                    </Container>

                    <div className="container mt-100 mt-60">
                        <div style={{ background: `url(${Map}) center center` }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="position-relative me-lg-5">
                                        <img src={About} className="rounded img-fluid mx-auto d-block" alt="" />
                                        <div className="play-icon">
                                            <Link2 to="#" onClick={() => setModal(true)} data-type="youtube" data-id="yba7hPeTSjk" className="play-btn lightbox">
                                                <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                                            </Link2>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                    <div className="section-title">
                                        <h4 className="title mb-3">Right Solutions Give You A <br /> Hassle Free Business</h4>
                                        <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                                        <ul className="list-unstyled text-muted">
                                            <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Beautiful and easy to understand animations</li>
                                            <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented &amp; Experienced Marketing Agency</li>
                                            <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Theme advantages are pixel perfect design</li>
                                        </ul>

                                        <div className="d-inline-block">
                                            <div className="pt-3 d-flex align-items-center border-top">
                                                <i className="uil uil-envelope text-primary me-2 fs-1"></i>
                                                <div className="content">
                                                    <p className="mb-0">Need More Help?</p>
                                                    <Link2 to="#" className="text-dark h6">Ask us your question</Link2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* popup video */}

                    <div className="container mt-5">
                        <Row>
                            <div className="col-md-3 col-6">
                                <div className="counter-box position-relative text-center">
                                    <h3 className="mb-0 fw-semibold mt-2"><CountUp className="counter-value" start={3} end={40} delay={2} />+ </h3>
                                    <span className="counter-head text-muted">Projects</span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="counter-box position-relative text-center">
                                    <h3 className="mb-0 fw-semibold mt-2"><CountUp className="counter-value" start={1} end={200} delay={2} />+ </h3>
                                    <span className="counter-head text-muted">Clients</span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="counter-box position-relative text-center">
                                    <h3 className="mb-0 fw-semibold mt-2"><CountUp className="counter-value" start={200} end={457} delay={2} />K </h3>
                                    <span className="counter-head text-muted">Members</span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="counter-box position-relative text-center">
                                    <h3 className="mb-0 fw-semibold mt-2"><CountUp className="counter-value" start={100} end={150} delay={2} />+ </h3>
                                    <span className="counter-head text-muted">Employee</span>
                                </div>
                            </div>
                        </Row>
                    </div>
                </section>
                {/*  End  */}

                {/* CTA Start */}
                <section className="section" style={{ background: `url(${CTA}) center` }}>
                    <div className="bg-overlay"></div>
                    <Container>
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="section-title text-center">
                                    <h4 className="title text-white mb-3">Ready to start your next web project now?</h4>
                                    <p className="text-white-50 mx-auto para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>

                                    <div className="mt-4 pt-2">
                                        <Link2 to="#" className="btn btn-primary">Get Started !</Link2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                {/*  CTA End  */}

                <AgencyProject />


                <section className="section overflow-hidden" id="team">
                    <Container>
                        <Row className="justify-content-center">
                            <div className="col-12">
                                <div className="section-title text-center mb-4 pb-2">
                                    <h4 className="title mb-3">Our Mind Power</h4>
                                    <p className="para-desc mx-auto text-muted mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                                </div>
                            </div>
                        </Row>

                        <Row>
                            {team.map((item, key) => (
                                <Col lg={3} md={6} className="mt-4 pt-2" key={key}>
                                    <Card className="border-0 text-center shadow border-0 overflow-hidden rounded">
                                        <img src={item.profile} className="img-fluid" alt="" />
                                        <CardBody>
                                            <h5 className="mb-1">{item.name}</h5>
                                            <small className="text-muted">{item.department}</small>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                    <div className="container mt-100 mt-60">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="me-lg-5">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="section-title text-center text-md-start mb-4 pb-2">
                                                <h4 className="title mb-3">Work Process</h4>
                                                <p className="para-desc text-muted mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Row>
                                        <div className="col-md-12 mt-4 pt-2">
                                            <div className="features feature-primary rounded border-0 d-flex">
                                                <div className="feature-icon sm-icon text-center">
                                                    <i className="rounded-pill">1</i>
                                                </div>

                                                <div className="content flex-1 ms-3">
                                                    <Link2 to="#" className="title h5 text-dark">Concept</Link2>
                                                    <p className="text-muted mt-2 mb-0">This prevents repetitive impairing the overall facilitates the comparison.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12 mt-4 pt-2">
                                            <div className="features feature-primary rounded border-0 d-flex">
                                                <div className="feature-icon sm-icon text-center">
                                                    <i className="rounded-pill">2</i>
                                                </div>

                                                <div className="content flex-1 ms-3">
                                                    <Link2 to="#" className="title h5 text-dark">Development</Link2>
                                                    <p className="text-muted mt-2 mb-0">This prevents repetitive impairing the overall facilitates the comparison.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12 mt-4 pt-2">
                                            <div className="features feature-primary rounded border-0 d-flex">
                                                <div className="feature-icon sm-icon text-center">
                                                    <i className="rounded-pill">3</i>
                                                </div>

                                                <div className="content flex-1 ms-3">
                                                    <Link2 to="#" className="title h5 text-dark">Live Demo</Link2>
                                                    <p className="text-muted mt-2 mb-0">This prevents repetitive impairing the overall facilitates the comparison.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>

                            <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="img-fluid-responsive position-relative">
                                    <img src={Laptop} className="mx-auto d-block" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <News />
                <Contact />
                {/* Footer Start */}
                <footer className="bg-footer">
                    <Container>
                        <Row>
                            <div className="col-12">
                                <div className="footer-py-60">
                                    <Row>
                                        <div className="col-lg-3 col-12 mb-lg-0 mb-md-4 pb-lg-0 pb-md-2">
                                            <Link2 to="#" className="logo-footer">
                                                <img src={Logo} height="24" alt="" />
                                            </Link2>
                                            <p className="mt-4 mb-0">Start working with Motos that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="uil uil-clock text-primary me-2 fs-1"></i>
                                                <div className="content">
                                                    <p className="mb-1 text-foot">Mon - Sat :</p>
                                                    <span className="text-light">10:00 AM To 07:30 PM</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h5 className="footer-head">Our Services</h5>
                                            <ul className="list-unstyled footer-list mt-4">
                                                <li><Link2 to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Financial Planning</Link2></li>
                                                <li><Link2 to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Software and Research</Link2></li>
                                                <li><Link2 to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Business Services</Link2></li>
                                                <li><Link2 to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Quality Resourcing</Link2></li>
                                                <li><Link2 to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Travel and Aviation</Link2></li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h5 className="footer-head">Get In Touch</h5>

                                            <p className="mt-4">C/54 Northwest Freeway, Suite <br />558, Houston, USA 485</p>
                                            <ul className="list-unstyled footer-list mt-3">
                                                <li>Phone: <a href="tel:+152534-468-854" className="text-light">+152 534-468-854</a></li>
                                                <li>Email: <a href="mailto:contact@example.com" className="text-light">contact@example.com</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h5 className="footer-head">Newsletter</h5>
                                            <p className="mt-4">Sign up and receive the latest tips via email.</p>
                                            <form>
                                                <Row>
                                                    <Col lg={12} >
                                                        <div className="foot-subscribe mb-3">
                                                            <label className="form-label">Write your email <span className="text-danger">*</span></label>
                                                            <input type="email" name="email" id="emailsubscribe" className="form-control rounded" placeholder="Your email : " required />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12} >
                                                        <div className="d-grid">
                                                            <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary" value="Subscribe" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </Row>
                    </Container>

                    <div className="footer-py-30 footer-bar">
                        <div className="container text-center">
                            <Row className="align-items-center justify-content-center">
                                <Col sm={8}>
                                    <div className="text-sm-start">
                                        <p className="mb-0">© {(new Date().getFullYear())}{" "} Motos. Design with <i className="mdi mdi-heart text-danger"></i> by <Link2 to="#" className="text-reset">Shreethemes</Link2>.</p>
                                    </div>
                                </Col>

                                <div className="col-sm-4 mt-4 mt-sm-0">
                                    <ul className="list-unstyled social-icon text-sm-end foot-social-icon mb-0">
                                        <li className="list-inline-item"><Link2 to="#" className="rounded"><i className="uil uil-shopping-cart align-middle" title="Buy Now"></i></Link2></li>
                                        <li className="list-inline-item ms-1"><Link2 to="#" className="rounded"><i className="uil uil-dribbble align-middle" title="dribbble"></i></Link2></li>
                                        <li className="list-inline-item ms-1"><Link2 to="#" className="rounded"><i className="uil uil-behance" title="Behance"></i></Link2></li>
                                        <li className="list-inline-item ms-1"><Link2 to="#" className="rounded"><i className="uil uil-linkedin" title="Linkedin"></i></Link2></li>
                                        <li className="list-inline-item ms-1"><Link2 to="#" className="rounded"><i className="uil uil-facebook-f align-middle" title="facebook"></i></Link2></li>
                                        <li className="list-inline-item ms-1"><Link2 to="#" className="rounded"><i className="uil uil-instagram align-middle" title="instagram"></i></Link2></li>
                                        <li className="list-inline-item ms-1"><Link2 to="#" className="rounded"><i className="uil uil-twitter align-middle" title="twitter"></i></Link2></li>
                                        <li className="list-inline-item ms-1"><Link2 to="#" className="rounded"><i className="uil uil-envelope align-middle" title="email"></i></Link2></li>
                                        <li className="list-inline-item ms-1"><Link2 to="#" className="rounded"><i className="uil uil-file align-middle" title="customization"></i></Link2></li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </div>
                </footer>
                {/* Back to top */}
                <Link to="home" id="back-to-top" className="back-to-top rounded-pill fs-5"><Icon.ArrowUp className="fea icon-sm icons align-middle" /></Link>
                {/* Back to top  */}
            </div>
            {/* popup video */}
            <ModalVideo
                channel="youtube"
                isOpen={videoModal}
                videoId="yba7hPeTSjk"
                onClose={() => setModal(false)}
            />

        </>
    )

}


import React, { useState, useEffect } from 'react';
import {
    Col, Container, Row, Nav,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem
} from "reactstrap";
import * as Icon from 'react-feather';
import CountUp from 'react-countup';
// import Typed from 'react-typed';
import Typed from "typed.js";
import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import Logodark from "../../assets/images/logo-dark.png";
import Logolight from "../../assets/images/logo-light.png";
import About from "../../assets/images/personal/about.jpg";
import Hero from "../../assets/images/personal/hero.png";
import CTOImage from "../../assets/images/personal/cta.jpg";
import Review from "../../component/Review";
import News from "../../component/News";
import Contact from "../../component/Contact";
import Cta2 from "../../assets/images/personal/cta-2.jpg";

import ShreeLogo from "../../assets/images/brands/shree-logo.png";
import GoogleLogo from "../../assets/images/brands/google-logo.png";
import LenovoLogo from "../../assets/images/brands/lenovo-logo.png";
import CircleLogo from "../../assets/images/brands/circle-logo.png";

import PortfolioSection from "../../component/Portfolio";

export default function Personal() {
    // const [modal, setModal] = useState(false);
    // const [isOpen, setIsOpen] = useState(false);
    const [videoModal, setVideoModal] = useState(false);
    // const [toggleMenu, setToggleMenu] = useState(false);
    const [arrow, setArrow] = useState(false);
    const [isOpen, setMenu] = useState(true);

    const handleScroll = () => {
        if (
            document.body.scrollTop >= 500 ||
            document.documentElement.scrollTop >= 500
        ) {
            setArrow(true);
        } else {
            setArrow(false);
        }
    };

    const openModal = () => {
        setVideoModal(true);
    };

    const toggleMenu = () => {
        setMenu(!isOpen)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);


        const typed = new Typed('#typed', {
            strings: [
                "<b>James Davidson</b>",
                "<b>Photographer</b>",
                "<b>Web Designer</b>",
                "<b>UX / UI Designer</b>",
            ],
            backDelay: 2000,
            loop: true,
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            typed.destroy();
        };
    }, []);

    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg fixed-top sticky bg-white">
                <Container>
                    <NavbarBrand className="navbar-brand" href="/">
                        <img src={Logodark} className="logo-light-mode" alt="" />
                        <img src={Logolight} className="logo-dark-mode" alt="" />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleMenu}>
                        <Icon.Menu />
                    </NavbarToggler>

                    <Collapse className={`navbar-collapse ${isOpen === true ? 'hidden' : 'show'}`} id="navbarSupportedContent">
                        <Nav className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-navlist">
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="home">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="about">About Me</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="service">Services</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="resume">Resume</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="portfolio">Portfolio</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="blog">Blog</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="contact">Contact Us</Link>
                            </NavItem>
                        </Nav>

                        <ul className="list-inline menu-social mb-0 ps-lg-4 ms-2">
                            <li className="list-inline-item">
                                <a href="tel:+15534-468-854" className="text-primary d-flex align-items-center"><span className="btn btn-sm btn-icon btn-pills btn-primary me-2"><Icon.Phone className="icons" /></span> Call Me</a>
                            </li>
                        </ul>
                    </Collapse>
                </Container>
            </nav>
            {/* HOME START */}
            <section className="bg-half-170 d-table w-100 bg-light bg-animation-right pb-0 overflow-hidden" id="home">
                <Container>
                    <Row className="align-items-center position-relative" style={{ zIndex: 1 }}>
                        <Col lg={9} >
                            <div className="position-absolute text-mover top-0">
                                James Davidson
                            </div>
                        </Col>
                        <Col lg={7} md={6}>

                            <div className="title-heading">
                                <h4 className="display-4 fw-bold">Hello !</h4>
                                <h5 className="heading sub-heading mb-3">I am {" "}
                                    <span id="typed" className="typewrite position-relative text-type-element"></span>
                                </h5>
                                <p className="text-muted para-desc mb-0">Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.</p>

                                <div className="mt-4">
                                    <Link to="contact" spy={true} smooth={true} duration={500} className="btn btn-primary">Hire Me</Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={5} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="position-relative">
                                <img src={Hero} className="img-fluid" alt="" />

                                <div className="position-absolute top-50 end-0 p-4 d-inline-block bg-white rounded-md shadow-md">
                                    <ul className="list-unstyled social-icon social mb-0">
                                        <li className="mt-3"><Link2 to="#" className="rounded"><Icon.Facebook className="fea icon-sm fea-social" /></Link2></li>
                                        <li className="mt-2"><Link2 to="#" className="rounded"><Icon.Instagram className="fea icon-sm fea-social" /></Link2></li>
                                        <li className="mt-2"><Link2 to="#" className="rounded"><Icon.Twitter className="fea icon-sm fea-social" /></Link2></li>
                                        <li className="mt-2"><Link2 to="#" className="rounded"><Icon.Linkedin className="fea icon-sm fea-social" /></Link2></li>
                                    </ul>

                                    <div className="position-absolute top-0 start-50 translate-middle">
                                        <Link2 to="#" className="btn btn-pills btn-lg btn-icon btn-primary"><i className="uil uil-share fs-5"></i></Link2>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="position-relative">
                <div className="text-center position-absolute top-50 start-50 translate-middle z-index-1">
                    <div className="play-icon bottom d-inline-block rounded-circle">
                        <Link2 to="#" onClick={openModal} className="play-btn lightbox">
                            <i className="mdi mdi-play rounded-circle"></i>
                        </Link2>
                    </div>
                </div>
            </div>
            {/* HOME END */}

            <section className="section mt-5" id="about">
                <Container>
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <img src={About} className="rounded shadow img-fluid" alt="" />
                        </div>

                        <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="ms-lg-5">
                                <div className="section-title">
                                    <h4 className="title mb-3">About Me</h4>
                                    <p className="text-muted">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                                    <p className="text-muted mb-0">Pursuing this degree will allow me to combine my interest in both technology and business. One day my hope is to become an independent business owner. Regardless of where my career leads me, working remotely remains one of my most important goals. Remote working will allow me to pursue some passions of mine such as online content creation and writing. Thank you for visiting my website!</p>
                                </div>

                                <div className="progress-box mt-4">
                                    <h6 className="title fw-normal text-muted">WordPress</h6>
                                    <div className="progress">
                                        <div className="progress-bar position-relative bg-primary" style={{ width: '84%' }}>
                                            <div className="progress-value d-block text-muted h6">84%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-box mt-4">
                                    <h6 className="title fw-normal text-muted">Angular / JavaScript</h6>
                                    <div className="progress">
                                        <div className="progress-bar position-relative bg-primary" style={{ width: '79%' }}>
                                            <div className="progress-value d-block text-muted h6">79%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-box mt-4">
                                    <h6 className="title fw-normal text-muted">HTML</h6>
                                    <div className="progress">
                                        <div className="progress-bar position-relative bg-primary" style={{ width: '95%' }}>
                                            <div className="progress-value d-block text-muted h6">95%</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-2">
                                    <Link spy={true} smooth={true} duration={500} to="portfolio" className="btn btn-soft-primary">View my Projects</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Start service  */}
            <section className="section bg-light" id="service">
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">What Do I Offer ?</h4>
                                <p className="para-desc text-muted mx-auto mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            </div>
                        </div>
                    </div>

                    <Row>
                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-md overflow-hidden">
                                <Icon.Airplay className="fea icon-lg fea-icon" />
                                <div className="content mt-4">
                                    <h5>UX / UI Design</h5>
                                    <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>

                                    <Link2 to="#" className="link">Read more <i className="uil uil-arrow-right"></i></Link2>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-md overflow-hidden">
                                <Icon.Aperture className="fea icon-lg fea-icon" />
                                <div className="content mt-4">
                                    <h5>Ios App Designer</h5>
                                    <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>

                                    <Link2 to="#" className="link">Read more <i className="uil uil-arrow-right"></i></Link2>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-md overflow-hidden">
                                <Icon.Camera className="fea icon-lg fea-icon" />
                                <div className="content mt-4">
                                    <h5>Photography</h5>
                                    <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>

                                    <Link2 to="#" className="link">Read more <i className="uil uil-arrow-right"></i></Link2>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-md overflow-hidden">
                                <Icon.Compass className="fea icon-lg fea-icon" />
                                <div className="content mt-4">
                                    <h5>Graphic Designer</h5>
                                    <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>

                                    <Link2 to="#" className="link">Read more <i className="uil uil-arrow-right"></i></Link2>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-md overflow-hidden">
                                <Icon.Settings className="fea icon-lg fea-icon" />
                                <div className="content mt-4">
                                    <h5>Web Security</h5>
                                    <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>

                                    <Link2 to="#" className="link">Read more <i className="uil uil-arrow-right"></i></Link2>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-md overflow-hidden">
                                <Icon.MessageCircle className="fea icon-lg fea-icon" />
                                <div className="content mt-4">
                                    <h5>24/7 Support</h5>
                                    <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>

                                    <Link2 to="#" className="link">Read more <i className="uil uil-arrow-right"></i></Link2>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section" style={{ background: `url(${CTOImage}) top` }}>
                <div className="bg-overlay"></div>
                <Container>
                    <Row id="counter">
                        <div className="col-lg-3 col-6">
                            <div className="counter-box rounded py-3 text-center">
                                <div className="counter-icon">
                                    <Icon.Smile className="fea icon-md text-primary" />
                                </div>
                                <h2><CountUp className="counter-value mt-3 text-white title-dark" start={95} end={1251} delay={2} /></h2>
                                <h6 className="counter-head font-weight-normal mb-0 text-white title-dark">Happy Client</h6>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="counter-box rounded py-3 text-center">
                                <div className="counter-icon">
                                    <Icon.Award className="fea icon-md text-primary" />
                                </div>
                                <h2><CountUp className="counter-value mt-3 text-white title-dark" start={1} end={15} delay={2} /></h2>
                                <h6 className="counter-head font-weight-normal mb-0 text-white title-dark">Award Won</h6>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="counter-box rounded py-3 text-center">
                                <div className="counter-icon">
                                    <Icon.Coffee className="fea icon-md text-primary" />
                                </div>
                                <h2><CountUp className="counter-value mt-3 text-white title-dark" start={30} end={3261} delay={2} /></h2>
                                <h6 className="counter-head font-weight-normal mb-0 text-white title-dark">Cup of Coffee</h6>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="counter-box rounded py-3 text-center">
                                <div className="counter-icon">
                                    <Icon.ThumbsUp className="fea icon-md text-primary" />
                                </div>
                                <h2><CountUp className="counter-value mt-3 text-white title-dark" start={3} end={36} delay={2} /></h2>
                                <h6 className="counter-head font-weight-normal mb-0 text-white title-dark">Project Complete</h6>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className="section active" id="resume">
                <Container>
                    <Row className="justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <div className="position-relative">
                                    <h4 className="title mb-4">Work Experience</h4>
                                </div>
                                <p className="text-muted mx-auto para-desc mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <div className="col-12 mt-4 pt-2">
                            <div className="timeline-page position-relative">
                                <div className="timeline-item">
                                    <Row>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="duration date-label-left position-relative text-md-end">
                                                <img src={ShreeLogo} className="rounded-pill avatar avatar-ex-small" alt="" />
                                                <h5 className="my-2">Self Employed</h5>
                                                <small className="text-muted mb-0">2019-21</small>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                            <div className="event event-description-right float-left text-start">
                                                <h6 className="title mb-1 text-capitalize">UX / UI Designer</h6>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                            </div>
                                        </div>
                                    </Row>
                                </div>

                                <div className="timeline-item mt-5 pt-4">
                                    <Row>
                                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                                            <div className="event event-description-left float-left text-end">
                                                <h6 className="title mb-1 text-capitalize">Sr. UX / UI Designer</h6>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                            <div className="duration duration-right position-relative">
                                                <img src={GoogleLogo} className="rounded-pill avatar avatar-ex-small" alt="" />
                                                <h5 className="my-2">Google Tech.</h5>
                                                <small className="text-muted mb-0">2018-19</small>
                                            </div>
                                        </div>
                                    </Row>
                                </div>

                                <div className="timeline-item mt-5 pt-4">
                                    <Row>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                            <div className="duration date-label-left position-relative text-md-end">
                                                <img src={LenovoLogo} className="rounded-pill avatar avatar-ex-small" alt="" />
                                                <h5 className="my-2">Lenovo Ltd.</h5>
                                                <small className="text-muted mb-0">2016-18</small>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                            <div className="event event-description-right float-left text-start">
                                                <h6 className="title mb-1 text-capitalize">Jr. UX / UI Designer</h6>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                            </div>
                                        </div>
                                    </Row>
                                </div>

                                <div className="timeline-item mt-5 pt-4">
                                    <Row>
                                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                                            <div className="event event-description-left float-left text-end">
                                                <h6 className="title mb-1 text-capitalize">Front-end Web Designer</h6>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                            <div className="duration duration-right position-relative">
                                                <img src={CircleLogo} className="rounded-pill avatar avatar-ex-small" alt="" />
                                                <h5 className="my-2">Circle CI</h5>
                                                <small className="text-muted mb-0">2015-16</small>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>

                        </div>
                    </Row>
                </Container>
            </section>
            <PortfolioSection />
            <Review />
            <section className="section" style={{ background: `url(${Cta2}) top` }}>
                <div className="bg-overlay"></div>
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <h4 className="text-light title-dark">I Am Available For Freelancer Projects.</h4>
                            <p className="text-white-50 mx-auto mt-4 para-desc">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            <div className="mt-4">
                                <Link to="contact" spy={true} smooth={true} duration={500} className="btn btn-primary mouse-down">Hire me <Icon.ChevronDown className="fea icon-sm" /> </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <News />
            <Contact />
            <footer className="bg-footer footer-bar">
                <div className="footer-py-30">
                    <div className="container text-center">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-8">
                                <div className="text-sm-start">
                                    <p className="mb-0">© {(new Date().getFullYear())}{" "} Motos. Design with <i className="mdi mdi-heart text-danger"></i> by <Link to="#" className="text-reset">Shreethemes</Link>.</p>
                                </div>
                            </div>

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
                        </div>
                    </div>

                </div>
            </footer>
            {/* End Footer */}

            <Link to="home" style={{ display: arrow === true ? 'block' : 'none' }} id="back-to-top" className="back-to-top rounded-pill fs-5"><Icon.ArrowUp className="fea icon-sm icons align-middle" /></Link>
            {/* popup video */}
            <ModalVideo
                channel="youtube"
                isOpen={videoModal}
                videoId="yba7hPeTSjk"
                onClose={() => setVideoModal(false)}
            />
        </>
    )
};
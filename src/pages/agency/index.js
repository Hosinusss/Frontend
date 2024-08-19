import React, { useState, useEffect } from 'react';
import {
    Col, Container, Row, Modal, ModalHeader, ModalBody,
    Nav,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
} from "reactstrap";

import * as Icon from 'react-feather';
import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import AgencyFeature from "../../component/AgencyFeature";
import AgencyProject from "../../component/AgencyProject";

import AgencyTeam from "../../component/AgencyTeam";
import News from "../../component/News";

import BackgroundImage1 from "../../assets/images/bg/5.jpg";
import AmazonImage from '../../assets/images/client/amazon.svg';
import GoogleImage from '../../assets/images/client/google.svg';
import LenovoImage from '../../assets/images/client/lenovo.svg';
import PaypalImage from '../../assets/images/client/paypal.svg';
import ShopifyImage from '../../assets/images/client/shopify.svg';
import SpotifyImage from '../../assets/images/client/spotify.svg';
import MapImage from '../../assets/images/map.png';
import AboutImage from '../../assets/images/about.jpg';
import CTAImage from "../../assets/images/bg/cta.png";
import Logodark from "../../assets/images/logo-dark.png";
import Logolight from "../../assets/images/logo-light.png";

export default function Agency() {
    const [isMenuOpen, setMenu] = useState(true);
    const [videoModal, setVideoModal] = useState(false);
    
    const [arrow, setArrow] = useState(false);
    const [iscontact, contactModal] = useState(false);


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

    const windowScroll = () => {
        const navbar = document.getElementById('navbar');
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add('nav-sticky');
        } else {
            navbar.classList.remove('nav-sticky');
        }
    };

    const openModal = () => {
        setVideoModal(true);
    };

    const toggleMenu = () => {
        setMenu(!isMenuOpen)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', windowScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', windowScroll);
        };
    }, []);

    return (
        <>
            <div>
                {/* <ScrollTo> */}
                <nav id="navbar" className="navbar navbar-expand-lg nav-light fixed-top sticky">
                    <div className="container">
                        <NavbarBrand className="navbar-brand" href="/">
                            <span className="logo-light-mode">
                                <img src={Logolight} className="l-light" alt="" />
                                <img src={Logodark} className="l-dark" alt="" />
                            </span>
                            <img src={Logolight} className="logo-dark-mode" alt="" />
                        </NavbarBrand>
                        <NavbarToggler onClick={toggleMenu}>
                            <Icon.Menu />
                        </NavbarToggler>

                        <Collapse className={`navbar-collapse ${isMenuOpen === true ? 'hidden' : 'show'}`} id="navbarSupportedContent">
                            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-navlist">
                                <NavItem>
                                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} className="nav-link">Products</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" to="feature" spy={true} smooth={true} duration={500} className="nav-link">Features</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} className="nav-link">Projects</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" to="pricing" spy={true} smooth={true} duration={500} className="nav-link">Pricing</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" to="team" spy={true} smooth={true} duration={500} className="nav-link">Team</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" to="blog" spy={true} smooth={true} duration={500} className="nav-link">News</Link>
                                </NavItem>
                                <NavItem>
                                    <Link2 className="nav-link" to="#" onClick={() => contactModal(true)}>Contact Us</Link2>
                                </NavItem>
                            </Nav>

                            <ul className="list-inline menu-social mb-0 ps-lg-4 ms-2">
                                <li className="list-inline-item"><Link2 to="#" className="btn btn-primary">Start Project</Link2></li>
                            </ul>
                        </Collapse>

                    </div>

                </nav>
                <Modal isOpen={iscontact} toggle={() => contactModal(!iscontact)}>
                    <ModalHeader >
                        Contact Us
                    </ModalHeader>
                    <ModalBody>
                        <form method="post" name="myForm">
                            <p id="error-msg" className="mb-0"></p>
                            <div id="simple-msg"></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label fw-normal">Your Name <span className="text-danger">*</span></label>
                                        <input name="name" id="name" type="text" className="form-control" placeholder="Name :" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label fw-normal">Your Email <span className="text-danger">*</span></label>
                                        <input name="email" id="email" type="email" className="form-control" placeholder="Email :" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label fw-normal">Subject</label>
                                        <input name="subject" id="subject" className="form-control" placeholder="subject :" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label fw-normal">Comments <span className="text-danger">*</span></label>
                                        <textarea name="comments" id="comments" rows={4} className="form-control" placeholder="Message :"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-grid">
                                        <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>

                <section className="bg-home d-flex align-items-center" style={{ background: `url(${BackgroundImage1})` }} id="home">
                    <div className="bg-overlay bg-linear-gradient-3"></div>
                    <Container>
                        <Row>
                            <Col>
                                <div className="title-heading">
                                    <h1 className="heading text-white title-dark mb-4">Bluid your audiance <br /> and sale more</h1>
                                    <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                                    <div className="mt-4 pt-2">
                                        <Link2 to="#" className="btn btn-primary m-1">Get Started</Link2>
                                        <Link2 to="#" data-type="youtube" data-id="yba7hPeTSjk" onClick={openModal} className="btn btn-icon btn-pills btn-primary m-1 lightbox"><Icon.Video className="icons" /></Link2><span className="text-uppercase text-white-50 small align-middle ms-2">Watch Now</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* end section */}


                <section className="section">
                    <Container>
                        <div style={{ background: `url(${MapImage}) center center` }}>
                            <Row className="align-items-center">
                                <Col lg={6} md={6}>
                                    <div className="position-relative me-lg-5">
                                        <img src={AboutImage} className="rounded img-fluid mx-auto d-block" alt="" />
                                        <div className="play-icon">
                                            <Link2 to="#" onClick={openModal} data-type="youtube" data-id="yba7hPeTSjk" className="play-btn lightbox">
                                                <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                                            </Link2>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
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
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>

                {/* Feature start */}

                <AgencyFeature />

                {/* Project start */}
                <AgencyProject />
                {/* Products  */}


                {/* CTA Start  */}
                <section className="section" data-jarallax='{"speed": 0.5}' style={{ background: `url(${CTAImage}) center` }}>
                    <div className="bg-overlay"></div>
                    <div className="container">
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
                    </div>
                </section>
                {/* CTA End  */}

                <AgencyTeam />

                <News />

                {/* Footer Start */}
                <footer className="bg-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="py-4">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                                            <img src={AmazonImage} className="avatar avatar-ex-sm" alt="" />
                                        </div>

                                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                                            <img src={GoogleImage} className="avatar avatar-ex-sm" alt="" />
                                        </div>

                                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                                            <img src={LenovoImage} className="avatar avatar-ex-sm" alt="" />
                                        </div>

                                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                                            <img src={PaypalImage} className="avatar avatar-ex-sm" alt="" />
                                        </div>

                                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                                            <img src={ShopifyImage} className="avatar avatar-ex-sm" alt="" />
                                        </div>

                                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                                            <img src={SpotifyImage} className="avatar avatar-ex-sm" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-py-30 footer-bar">
                        <div className="container text-center">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-sm-8">
                                    <div className="text-sm-start">
                                        <p className="mb-0">© {(new Date().getFullYear())}{" "} Motos. Design with <i className="mdi mdi-heart text-danger"></i> by <Link2 to="#" className="text-reset">Shreethemes</Link2>.</p>
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
                {/* Footer End  */}
                {/* Back to top */}
                <Link to="home" style={{ display: arrow === true ? 'block' : 'none' }} id="back-to-top" className="back-to-top rounded-pill fs-5"><Icon.ArrowUp className="fea icon-sm icons align-middle" /></Link>
                {/* Back to top  */}

            </div>
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
import React, { useState, useEffect } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import {
    Col, Container, Row, Modal, ModalHeader, ModalBody, Nav,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem
} from "reactstrap";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import { Link } from 'react-scroll';

import { Link as Link2 } from 'react-router-dom';

import Image1 from "../../assets/images/portfolio/11.jpg";
import Image2 from "../../assets/images/portfolio/12.jpg";
import Image3 from "../../assets/images/portfolio/13.jpg";
import Image4 from "../../assets/images/portfolio/14.jpg";
import Image5 from "../../assets/images/portfolio/15.jpg";
import Image6 from "../../assets/images/portfolio/16.jpg";
import Image7 from "../../assets/images/portfolio/17.jpg";
import Image8 from "../../assets/images/portfolio/18.jpg";
import Image9 from "../../assets/images/portfolio/19.jpg";
import Logo from "../../assets/images/logo-icon-64.png";

import * as Icon from 'react-feather';
import Logodark from "../../assets/images/logo-dark.png";
import Logolight from "../../assets/images/logo-light.png";

const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9
];

export default function Portfolio() {
    const [videoModal, setVideoModal] = useState(false);
    const [filterPortfolio, setFilterPortfolio] = useState(null);
    const [isMenuOpen, setMenu] = useState(true);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [iscontact, contactModal] = useState(false);


    const portfolioList = [
        {

            image: Image1,
            title: 'Iphone mockup',
            subtext: 'Branding'
        },
        {
            image: Image2,
            title: 'Iphone mockup',
            subtext: 'Designing'
        }, {
            image: Image3,
            title: 'Iphone mockup',
            subtext: 'Branding'
        }, {
            image: Image4,
            title: 'Iphone mockup',
            subtext: 'Photography'
        }, {
            image: Image5,
            title: 'Iphone mockup',
            subtext: 'Development'
        }, {
            image: Image6,
            title: 'Iphone mockup',
            subtext: 'Development'
        }
    ]
    const handleScroll = () => {
        const navbar = document.getElementById('navbar');

        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }

        
    };

    const toggleMenu = () => {
        setMenu(!isMenuOpen)
    }
   

    const openModal = () => {
        setVideoModal(true);
    };

    const matchsubtext = (subtext) => {
        setFilterPortfolio(subtext);
    };
    const filterData = filterPortfolio ? portfolioList.filter((item) => item.subtext === filterPortfolio) : portfolioList

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <div>
                <nav id="navbar" className="navbar navbar-expand-lg fixed-top sticky">
                    <div className="container">
                        <NavbarBrand className="navbar-brand" href="/">
                            <img src={Logodark} className="logo-light-mode" alt="" />
                            <img src={Logolight} className="logo-dark-mode" alt="" />
                        </NavbarBrand>
                        <NavbarToggler onClick={toggleMenu}>
                            <Icon.Menu />
                        </NavbarToggler>

                        <Collapse className={`navbar-collapse ${isMenuOpen === true ? 'hidden' : 'show'}`} id="navbarSupportedContent">
                            <Nav className="navbar-nav mx-auto mb-2 mb-lg-0" id="navbar-navlist">
                                <NavItem>
                                    <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="home">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="portfolio">Works</Link>
                                </NavItem>
                                <NavItem>
                                    <Link2 className="nav-link" to="#" onClick={() => contactModal(true)}>Contact Us</Link2>
                                </NavItem>
                            </Nav>

                            <ul className="list-inline menu-social mb-0 ps-lg-4 ms-2">
                                <li className="list-inline-item"><Link to="#" className="btn btn-sm btn-icon btn-pills btn-primary"><Icon.Facebook size={24} className="icons" /></Link></li>
                                <li className="list-inline-item ms-1"><Link to="#" className="btn btn-sm btn-icon btn-pills btn-primary"><Icon.Instagram size={24} className="icons" /></Link></li>
                                <li className="list-inline-item ms-1"><Link to="#" className="btn btn-sm btn-icon btn-pills btn-primary"><Icon.Linkedin size={24} className="icons" /></Link></li>
                            </ul>
                        </Collapse>

                    </div>
                </nav>

                <section className="bg-half d-table w-100" id="home">
                    <div className="background-lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <Container>
                        <Row className="mt-5 justify-content-center">
                            <Col md={9} className="mb-5">
                                <div className="title-heading text-center">
                                    <h5 className="text-muted fw-normal">Minimalist Portfolio Creator</h5>
                                    <h4 className="heading text-shadow-title fw-bold mb-4">We Built Creative & Classic Portfolio</h4>
                                    <p className="text-muted para-desc mx-auto">Motos is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                                    <div className="mt-4 play-icon bottom d-inline-block rounded-circle">
                                        <Link2 to="#" onClick={openModal} className="play-btn lightbox">
                                            <i className="mdi mdi-play rounded-circle"></i>
                                        </Link2>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60" id="portfolio">
                        <Row className="justify-content-center">
                            <div className="col-12 filters-group-wrap text-center">
                                <div className="filters-group">
                                <ul className="container-filter mb-4 categories-filter list-unstyled filter-options">
                                
                                <li className={`${filterPortfolio === 'All' ? 'active' : ''} list-inline-item categories h6 position-relative text-dark active`} data-group="all" onClick={ () => matchsubtext('All')}>All</li>
                                <li className={`${filterPortfolio === 'Branding' ? 'active' : ''}  list-inline-item categories h6 position-relative text-dark`} data-group="branding" onClick={ () => matchsubtext('Branding')}>Branding</li>
                                <li className={`${filterPortfolio === 'Designing' ? 'active' : ''} list-inline-item categories h6 position-relative text-dark`} data-group="designing" onClick={ () => matchsubtext('Designing')}>Designing</li>
                                <li className={`${filterPortfolio === 'Photography' ? 'active' : ''} list-inline-item categories h6 position-relative text-dark`} data-group="photography" onClick={ () => matchsubtext('Photography')}>Photography</li>
                                <li className={`${filterPortfolio === 'Development' ? 'active' : ''} list-inline-item categories h6 position-relative text-dark`} data-group="development" onClick={ () => matchsubtext('Development')}>Development</li>
                            </ul>
                                </div>
                            </div>
                        </Row>

                        <Row id="grid" className=" g-4">
                            {filterData.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-12 picture-item" key={index}>
                                    <div className="card border-0 project project-primary position-relative d-block overflow-hidden rounded">
                                        <div className="card-body p-0">
                                            <img src={item.image} className="img-fluid" alt="workimage" />
                                            <div className="overlay-work bg-dark"></div>
                                            <div className="content bg-white p-3 rounded shadow start-0 end-0 bottom-0 m-3">
                                                <Link2 to="#" className="text-dark title h5">{item.title}</Link2>
                                                <h6 className="text-muted fw-normal mt-2 tag mb-0">{item.subtext}</h6>
                                            </div>
                                            <div className="icons text-center">
                                                <Link2 to="#" onClick={() => setIsOpen(true)} className="btn btn-icon btn-pills lightbox"><Icon.Camera className="fea icon-sm image-icon" /></Link2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </Row>
                        {isOpen && (
                            <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() =>
                                setPhotoIndex(
                                    (photoIndex + images.length - 1) % images.length,
                                )
                            }
                            onMoveNextRequest={() =>
                                setPhotoIndex(
                                    (photoIndex + 1) % images.length,
                                )
                            }
                            />
                        )}

                        <Row className="text-center">
                            <div className="col-12 mt-4 pt-2">
                                <Link2 to="#" className="btn btn-pills btn-primary">See works</Link2>
                            </div>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h5 className="text-muted fw-normal">Available for freelance projects</h5>
                                    <h1 className="fw-bold display-6 my-4">Do you have designing project? <br /> Let's talk.</h1>
                                    <div className="mt-4 pt-2">
                                        <Link2 to="#" data-bs-toggle="modal" onClick={() => contactModal(true)} className="btn btn-pills btn-primary">Contact us</Link2>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <Modal isOpen={iscontact} toggle={() => contactModal(!iscontact)}  >
                    <ModalHeader>
                        <h5 className="modal-title" id="exampleModalCenterTitle">Contact Us </h5>

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

                {/* footer start  */}
                <footer className="footer bg-footer">
                    <div className="footer-py-60">
                        <Container>
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <Link2 to="#"><img src={Logo} alt="" /></Link2>
                                    <p className="para-desc mx-auto copy-rights mt-5">Motos is a high-quality creative minimal portfolio template with great style, modern, creative, clean code and responsive design.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mt-5 mb-0">
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
                        </Container>
                    </div>

                    <div className="footer-py-30 footer-bar">
                        <Container className="text-center">
                            <div className="row align-items-center">
                                <div className="col">
                                    <p className="mb-0">© {(new Date().getFullYear())}{" "} Motos. Design with <i className="mdi mdi-heart text-danger"></i> by <Link2 to="#" className="text-reset">Shreethemes</Link2>.</p>
                                </div>
                            </div>
                        </Container>
                    </div>
                </footer>
                {/* footer end  */}
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
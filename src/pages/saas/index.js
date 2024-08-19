
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

import Navbar from "../../component/Navbar";

import Review from "../../component/Review";
import News from "../../component/News";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer";
import Feature from "../../component/Feature";

import AmazonImage from '../../assets/images/client/amazon.svg';
import GoogleImage from '../../assets/images/client/google.svg';
import LenovoImage from '../../assets/images/client/lenovo.svg';
import PaypalImage from '../../assets/images/client/paypal.svg';
import ShopifyImage from '../../assets/images/client/shopify.svg';
import SpotifyImage from '../../assets/images/client/spotify.svg';
import LogoIcon from '../../assets/images/logo-icon-48.png';

import Laptop from '../../assets/images/bg/laptop.png';

export default function Saas() {


    window.addEventListener("scroll", windowScroll);

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
    };


    return (
        <>
            <div>

                <Navbar />
                {/* Hero Start  */}
                <section className="bg-half-170 d-table w-100 overflow-hidden bg-soft-primary" id="home">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6} md={6}>
                                <div className="title-heading">
                                    <img src={LogoIcon} alt="" />
                                    <h1 className="heading my-3">Make everything <br /> organize with Motos</h1>
                                    <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                                    <div className="mt-4 pt-2">
                                        <Link to="#" className="btn btn-primary">Buy Now</Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="img-fluid-responsive position-relative">
                                    <img src={Laptop} className="mx-auto d-block" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* Hero End  */}

                {/* Partners start */}

                <section className="mt-5 pt-md-5">
                    <Container>
                        <Row className="justify-content-center">
                            <div className="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                                <img src={AmazonImage} className="avatar avatar-ex-sm" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                                <img src={GoogleImage} className="avatar avatar-ex-sm" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                                <img src={LenovoImage} className="avatar avatar-ex-sm" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                                <img src={PaypalImage} className="avatar avatar-ex-sm" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                                <img src={ShopifyImage} className="avatar avatar-ex-sm" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                                <img src={SpotifyImage} className="avatar avatar-ex-sm" alt="" />
                            </div>
                        </Row>
                    </Container>
                </section>
                {/* Partners End  */}

                <Feature />

                {/* Products  */}

                <Review />
                <News />
                <Contact />
                <Footer />
            </div>
        </>
    )
};
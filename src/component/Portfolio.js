import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import * as Icon from 'react-feather';

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

import Image1 from "../assets/images/portfolio/11.jpg";
import Image2 from "../assets/images/portfolio/12.jpg";
import Image3 from "../assets/images/portfolio/13.jpg";
import Image4 from "../assets/images/portfolio/14.jpg";
import Image5 from "../assets/images/portfolio/15.jpg";
import Image6 from "../assets/images/portfolio/16.jpg";
import Image7 from "../assets/images/portfolio/17.jpg";
import Image8 from "../assets/images/portfolio/18.jpg";
import Image9 from "../assets/images/portfolio/19.jpg";

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

export default function PortfolioSection() {

    const [filterPortfolio, setFilterPortfolio] = useState(null);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const data = [
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
        },
        {
            image: Image7,
            title: 'Iphone mockup',
            subtext: 'Branding'
        },
        {
            image: Image8,
            title: 'Iphone mockup',
            subtext: 'Development'
        }
    ]

    const matchsubtext = (subtext) => {
        setFilterPortfolio(subtext);
    };
    const filterData = filterPortfolio ? data.filter((item) => item.subtext === filterPortfolio) : data

    return (
        <>
            <section className="section bg-light" id="portfolio">
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <div className="position-relative">
                                    <h4 className="title mb-4">Portfolio &amp; Projects</h4>
                                </div>
                                <p className="text-muted mx-auto para-desc mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            </div>
                        </div>
                    </div>
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
                            <Col lg={3} md={4} className="col-12 picture-item" key={index}>
                                <div className="card border-0 project project-primary position-relative d-block overflow-hidden rounded">
                                    <div className="card-body p-0">
                                        <img src={item.image} className="img-fluid" alt="workimage" />
                                        <div className="overlay-work bg-dark"></div>
                                        <div className="content bg-white p-3 rounded shadow start-0 end-0 bottom-0 m-3">
                                            <Link to="#" className="text-dark title h5">{item.title}</Link>
                                            <h6 className="text-muted fw-normal mt-2 tag mb-0">{item.subtext}</h6>
                                        </div>
                                        <div className="icons text-center">
                                            <Link to="#" onClick={() => setIsOpen(true)} className="btn btn-icon btn-pills lightbox"><Icon.Camera className="fea icon-sm image-icon" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
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
                            <Link to="#" className="btn btn-pills btn-primary">See works</Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
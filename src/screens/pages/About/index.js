import React from 'react';
import cssStyles from "./cssStyle.module.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slide = () => {
    return (<div className="bg-white p-2 m-4 rounded text-center">
        <img className="w-100" src={require('../../../assets/navbarContImg.jpg')} alt="" />
        <h5 className="mt-2 mb-2">Men's Fashion Ware</h5>
        <p className="mt-2 mb-2">Lorem ebisode dolor sit amot</p>
    </div>
    );
};

const AboutLetter = () => {
    return (
        <div className="col p-2 m-2">
            <h5 className={cssStyles.aboutLetterTitle}>Best Service For Our Customer</h5>
            <p className={cssStyles.subTitleColor}>Lorem ipsum dolor sit amt,Lorem ipsum dolor sit amt,Lorem ipsum dolor sit amt.</p>
            <p className={cssStyles.subTitleColor}>Lorem ipsum dolor sit amt,Lorem ipsum dolor sit amt,Lorem ipsum dolor sit amt.</p>
        </div>
    );
}
const About = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="bg-light">
            <div className={cssStyles.sliderCont}>
                <Carousel responsive={responsive} autoPlay={1500} draggable centerMode infinite>
                    <Slide />
                    <Slide />
                    <Slide />
                    <Slide />
                    <Slide />
                    <Slide />
                </Carousel>
            </div>
            <>
                <div className="text-center p-2 m-2">
                    <h5 className="font-weight-normal">Best product, Best Service</h5>
                    <h1><span className={cssStyles.primaryColor}>About</span> Estilo</h1>
                </div>
                <hr />
                <div className="row w-75 mx-auto">
                    <AboutLetter />
                    <AboutLetter />
                    <AboutLetter />
                </div>
            </>
            <div className={`${cssStyles.aboutApp} row justify-content-center w-100 m-0`}>
                <div className="col-4 py-3">
                    <h5 className="font-weight-normal text-white">Order food on the go</h5>
                    <h1 className={cssStyles.primaryColor}>Estilo App</h1>
                    <p className="text-white">Lorem ipsum dolor sit amt,Lorem ipsum dolor sit amt,Lorem ipsum dolor sit amt.</p>
                    <div className="row w-75 mx-auto">
                        <img className="col h-75" src={require('../../../assets/downloadApple.png')} alt="download from apple store" />
                        <img className="col h-75" src={require('../../../assets/downloadApple.png')} alt="download from google play" />
                    </div>
                </div>
                <div className="col-3 row mt-5">
                    <img className="col h-75" src={require('../../../assets/screenshot1.png')} alt="download from apple store" />
                    <img className="col mt-5" src={require('../../../assets/screenshot2.png')} alt="download from google play" />
                </div>
            </div>
        </div>);
}

export { About };
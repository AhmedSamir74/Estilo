/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cssStyles from "./cssStyle.module.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdbreact";
const Footer = ({ image, title, description }) => {
  return (
    <MDBFooter className={`page-footer ${cssStyles.footerCont} font-small pt-0`}>
      <div className={cssStyles.bgPrimary}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol className="text-center text-md-left mb-4 mb-md-0">
              <h3 className="mb-0 white-text text-center">
                Delivered faster to your door!
              </h3>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <img className="w-75" src={require('../../assets/logo@2x.png')} alt="App Logo" />
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="font-weight-bold">
              <strong className={cssStyles.footerSubTitle}>Quick Links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!" className={cssStyles.footerLink}>Home</a>
            </p>
            <p>
              <a href="#!" className={cssStyles.footerLink}>Categories</a>
            </p>
            <p>
              <a href="#!" className={cssStyles.footerLink}>Contact us</a>
            </p>
            <p>
              <a href="#!" className={cssStyles.footerLink}>About us</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong className={cssStyles.footerSubTitle}>Privacy Links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!" className={cssStyles.footerLink}>terms & Conditions</a>
            </p>
            <p>
              <a href="#!" className={cssStyles.footerLink}>Privacy & Policy</a>
            </p>
            <p>
              <a href="#!" className={cssStyles.footerLink}>Return Policy</a>
            </p>
            <p>
              <a href="#!" className={cssStyles.footerLink}>FAQs</a>
            </p>
            <p>
              <a href="#!" className={cssStyles.footerLink}>Live chat</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong className={cssStyles.footerSubTitle}>Follow Us</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p className={`d-flex ${cssStyles.footerIcons}`}>
              <ion-icon name="logo-facebook"></ion-icon>
              <span className={cssStyles.activeIcon}>
                <ion-icon name="logo-twitter"></ion-icon>
              </span>
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-snapchat"></ion-icon>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 border-top border-light">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol>
              Copyright&copy; {new Date().getFullYear()} <a href="#" className={cssStyles.footerLink}> estilo.com </a>
            </MDBCol>
            <MDBCol>
              Powered by Line <img src={require('../../assets/lineLogo.png')} className={cssStyles.footerLogo} alt="line logo" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export { Footer };

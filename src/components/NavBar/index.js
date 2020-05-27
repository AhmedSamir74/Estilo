/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { makeStyles, Tabs, Tab, Box, Typography, useTheme, TextField } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import ShopIcon from "@material-ui/icons/Shop";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { styles, definedStyles } from "./styles";
import cssStyles from "./cssStyle.module.css";
import SwipeableViews from "react-swipeable-views";
import { LoginForm, RegisterForm } from "../../components";
const NavBar = () => {
  const useStyles = makeStyles((theme) => definedStyles);
  const theme = useTheme();

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <div>
      <div className="modal fade login-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className={`modal-header ${cssStyles.loginHeader}`}>
              <div className="d-flex flex-column w-100">
                <button type="button" className="close px-4" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="text-white">&times;</span>
                </button>
                <img
                  src={require("../../assets/logo.png")}
                  alt="logo"
                  className="mx-auto w-25 pt-2 pb-4"
                />
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  aria-label=""
                  centered
                  className="w-100"
                >
                  <Tab label="Log in" className="text-white" />
                  <Tab label="Sign up" className="text-white" />
                  <Tab label="Reset Password" className="text-white" />
                </Tabs>
              </div>
            </div>
            <div className="modal-body">
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <LoginForm setValue={setValue} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <RegisterForm />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <form noValidate>
                    <div className={`d-flex ${cssStyles.loginInptCont}`}>
                      <TextField
                        className="w-75 my-2 mx-auto"
                        required
                        id="standard-helperText"
                        label="Email ID"
                        variant="outlined"
                      />
                    </div>
                    <div className="d-flex justify-content-center w-75 mx-auto">
                      <button type="button" className={`btn btn-secondary ${cssStyles.btnLogin} w-50`} data-dismiss="modal" aria-label="Close">Sent</button>
                    </div>
                  </form>
                </TabPanel>
              </SwipeableViews>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.screen}>
        {/* Navbar Container */}
        <div className={`d-flex ${cssStyles.navbarCont} mx-auto w-75 mt-3`}>
          <div className="col-2 p-2 d-flex align-items-center justify-content-space-arround">
            <img
              src={require("../../assets/logo.png")}
              alt="logo"
              className="m-auto w-75 h-75 rounded"
            />
          </div>
          <div className="col-10 row d-flex flex-row py-2 px-0">
            <nav
              className={`navbar col-sm-12 col-lg-8 navbar-expand ${cssStyles.navigatorCont} navbar-dark`}
            >
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CATEGORIES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CONTACT US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      MY ORDERS
                    </a>
                  </li>
                  <li className="nav-item dropdown show">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src={require("../../assets/kuwait-flag.png")}
                        alt="select Flag"
                      />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Egypt
                      </a>
                      <a className="dropdown-item" href="#">
                        UAE
                      </a>
                      <a className="dropdown-item" href="#">
                        KSA
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="col-sm-12 col-lg-4 d-flex flex-row p-2 justify-content-space-between align-items-center">
              <AppleIcon style={styles.navIcon} />
              <ShopIcon style={styles.navIcon} />
              <a href="#" className={cssStyles.loginLink} data-toggle="modal" data-target=".login-modal">
                LOGIN/SIGNUP
              </a>
              <div style={styles.navIcon}>
                <ShoppingCartIcon />
                <span className={cssStyles.cartBadge + " badge badge-pill"}>
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Search container */}
        <div>
          <h3 className="text-center">Find the best product ...</h3>
          <div className="d-flex justify-content-center mt-3">
            <form className="col-4 d-flex justify-content-space-around">
              <input
                className={`col-10 form-control ${cssStyles.searchInpt} mr-sm-2`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={`btn btn-warning rounded-circle ${cssStyles.searchBtn} my-sm-0`}
                type="submit"
              >
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div style={styles.sliderCont} className="container-fluid">
        <div
          id="carouselExampleControls"
          className="carousel slide w-100"
          data-ride="carousel"
          data-interval="155000"
        >
          <div className="carousel-inner mx-20 h-100 w-75 mx-auto" role="listbox">
            <div className="carousel-item h-100 active">
              <div className="row h-100 d-flex align-items-center ">
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item h-100">
              <div className="row h-100 d-flex align-items-center ">
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
                <div className="col text-center">
                  <a href="#" className={cssStyles.carouselAncor}>
                    <img
                      src={require("../../assets/imgs/sofa@2x.png")}
                      alt="Image"
                    />
                    <span className="mt-3">Men</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev d-sm-none d-md-flex"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next d-sm-none d-md-flex"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export { NavBar };

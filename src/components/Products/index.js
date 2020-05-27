import React from "react";
import cssStyles from "./cssStyle.module.css";
import { Product } from "../Product";
const Products = () => {
  return (
    <div className="container-fluid row m-0 px-5 py-4 bg-light">
      <Product image={require('../../assets/navbarContImg.jpg')} title="Man's Store" description="this is description" />
      <Product image={require('../../assets/navbarContImg.jpg')} title="Women's Store" description="this is description" />
      <Product image={require('../../assets/navbarContImg.jpg')} title="Kids Store" description="this is description" />
      <Product image={require('../../assets/navbarContImg.jpg')} title="Man's Store" description="this is description" />
      <Product image={require('../../assets/navbarContImg.jpg')} title="Women's Store" description="this is description" />
      <Product image={require('../../assets/navbarContImg.jpg')} title="Kids Store" description="this is description" />
      <Product image={require('../../assets/navbarContImg.jpg')} title="Man's Store" description="this is description" />
      <Product image={require('../../assets/navbarContImg.jpg')} title="Women's Store" description="this is description" />
      <Product image={require('../../assets/navbarContImg.jpg')} title="Kids Store" description="this is description" />
    </div>
  );
};

export { Products };

import React from "react";
import cssStyles from "./cssStyle.module.css";
const Product = ({ image, title, description }) => {
  return (
    <div className={`col-md-4 ${cssStyles.catCard} p-2`}>
      <img src={image} alt={title} className="position-relative w-100 h-100" />
      <h4 className={`position-absolute ${cssStyles.title} text-white`}>{title}</h4>
      <p className={`position-absolute ${cssStyles.description} text-white`}>{description}</p>
    </div>
  );
};

export { Product };

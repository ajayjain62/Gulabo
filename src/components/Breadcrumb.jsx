import React from "react";
import "./Breadcrumb.css";
import Banner from "./Banner";

const Breadcrumb = () => {
  return (
    <>
   
    <div className="breadcrumb-container">
      <a href="#">Home</a> / <a href="#">Men</a> / <span>Ethnic Wear</span>
    </div>
    <Banner />
    </>
  );
};

export default Breadcrumb;

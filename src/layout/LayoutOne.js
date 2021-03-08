import React, { Fragment } from "react";
import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";

const LayoutOne = ({children}) => {
  return (
    <Fragment>
     <Header/>
     <div className="container my-2">
     {children}
     </div>  
    <Footer/>
    </Fragment>

   
  );
};


export default LayoutOne;

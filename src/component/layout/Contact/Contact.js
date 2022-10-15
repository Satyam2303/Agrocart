import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <>
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:satyammunot2303@gmail.com">
        <Button>Contact:satyammunot2303@gmail.com</Button>
        </a>
        <br/>
        <br/>
        <a href="9370015416">
        <Button>MOBILE NO</Button>
        </a>
      
    </div>
    </>
  );
};

export default Contact;
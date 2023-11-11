
import React from "react";
import './style.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () =>{

    return(
        <div>
            <footer>
                <div className="first-footer">
                    <h1>Download Our App</h1>
                    <h1 className="moovie">M<span>oo</span>vie</h1>
                </div>

                <div className="second-footer">
                    <h1>Navigation</h1>
                    <p>Home</p>
                    <p>Mylist</p>
                    <p>About Us</p>
                </div>

                <div className="third-footer">
                    <h1>Legal</h1>
                    <p>General info</p>
                    <p>Privacy Policy</p>
                    <p>Terms of service</p>
                </div>

                <div className="fourth-footer">
                    <h1>Contact Us:</h1>
                    <p>support@egymovies.com</p>
                    <p>Tel +201045963322</p>
                    <p>OP By Using</p>
                  <span><FaWhatsapp/></span>   <span><FaInstagram/></span>  <span><FaFacebookF/></span>
                </div>

                <div>
                    <h1>Share Website Via:</h1>
                    <p> <FaFacebookF/> Facebook</p>
                    <p> <span><FaInstagram/></span>  Instagram</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
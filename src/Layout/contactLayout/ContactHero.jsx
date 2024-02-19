import React from "react";
import contactHero from "../../assets/contact/contactHero1.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const ContactHero = () => {
  return (
    <div className="flex flex-row w-full gap-4 justify-between md:w-full md:flex-wrap">
      {/* Sol Div */}
      <div className="flex flex-col font-bold ml-6 justify-center gap-8">
        <h5 className="text-base text-sBlack">CONTACT US</h5>
        <h3 className="text-6xl text-sBlack">Get in touch today!</h3>
        <p className="max-w-[376px] text-primary-gray">
          We know how large objects will act, but things on a small scale
        </p>
        <div className="flex flex-col gap-6">
          <span>Phone ; +451 215 215 </span>
          <span>Fax : +451 215 215</span>
        </div>
        <div className="flex gap-6 ">
          <a href="https://www.facebook.com/" target="blank">
            <FaFacebook size={24} className="text-sBlack" />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <FaInstagram size={24} className="text-sBlack" />
          </a>
          <a href="https://www.twitter.com/" target="blank">
            <FaTwitter size={24} className="text-sBlack" />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin size={24} className="text-sBlack" />
          </a>
        </div>
      </div>
      {/* Sag Div */}
      <div className="flex md:w-full">
        <img src={contactHero} className="flex md:w-full" />
      </div>
    </div>
  );
};
export default ContactHero;

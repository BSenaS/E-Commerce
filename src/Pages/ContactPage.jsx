import React from "react";
import ContactHero from "../Layout/contactLayout/ContactHero";
import ContactInfo from "../Layout/contactLayout/ContactInfo";

const ContactPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ContactHero />
      <ContactInfo />
    </div>
  );
};

export default ContactPage;

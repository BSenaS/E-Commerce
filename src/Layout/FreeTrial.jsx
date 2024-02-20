import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const FreeTrial = () => {
  return (
    <div className="flex flex-col items-center gap-8 my-20 ">
      <h2 className="font-bold text-sBlack text-4xl md:max-w-[300px] md:text-center">
        Start your 14 days free trial
      </h2>
      <span className="flex flex-col max-w-[420px] text-sm text-primary-gray md:max-w-[350px] md:text-center">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </span>
      <div>
        <button className="bg-pBlue text-sm font-bold text-white py-3 px-6 rounded-md ">
          Try it free now
        </button>
      </div>
      <div className="flex gap-6 justify-center items-center">
        <a href="https://www.facebook.com/" target="blank">
          <FaFacebook size={24} className="text-pBlue" />
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <FaInstagram size={24} className="text-black" />
        </a>
        <a href="https://www.twitter.com/" target="blank">
          <FaTwitter size={24} className="text-[#55ACEE]" />
        </a>
        <a href="https://www.linkedin.com/">
          <FaLinkedin size={24} className="text-[#0A66C2]" />
        </a>
      </div>
    </div>
  );
};

export default FreeTrial;

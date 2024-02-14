import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex max-w-[1440px] w-full justify-center">
      <div className="flex max-w-[1200px] w-full ">
        <div>
          <h3 className="font-bold text-2xl	">Bandage</h3>
        </div>
        <div className="flex">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

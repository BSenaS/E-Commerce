import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";

export const Footer = () => {
  const { footerData } = useData();
  return (
    <div className="flex w-full ">
      <div className="flex flex-col max-w-[1050px] w-full mx-auto">
        {/* First Div (Contains company title + icons) */}
        <div className="flex flex-row justify-between w-full py-10 md:flex-col ">
          <div>
            <h3 className="font-bold text-2xl	">{footerData.brandName}</h3>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook size={24} className="text-pBlue" />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram size={24} className="text-pBlue" />
            </a>
            <a href="https://www.twitter.com/" target="blank">
              <FaTwitter size={24} className="text-pBlue" />
            </a>
          </div>
        </div>
        <hr />
        {/* Second Div (Contains Links) */}
        {/* Bu kısımdaki fixed widthi sil, justify-between niye çalışmıyor? */}
        <div className=" pt-4 pb-12">
          <div className="flex md:flex-wrap mt-8 justify-between">
            {footerData.footerSections.map((item, index) => (
              <div key={index} className="flex flex-col gap-4  md:w-full ">
                <h5 className="font-bold text-base w-full">{item.title}</h5>
                <ul className="w-full ">
                  {item.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="text-primary-gray text-sm  font-bold w-full my-2"
                    >
                      <Link to={"/"} className="flex ">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Bu kısımdaki fixed widthi sil! */}
            <div className="flex flex-col gap-4 md:w-full ">
              <h5 className="font-bold text-base">{footerData.inputTitle}</h5>
              <form className="flex ">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="py-4 max-h-[58px] border border-solid bg-[#F9F9F9] rounded text-primary-gray border-[#E6E6E6] w-full"
                />
                <button
                  type="submit"
                  className="bg-pBlue text-white text-xs font-light max-h-[58px] px-4 py-4 rounded-r-md"
                >
                  {footerData.buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex font-bold text-primary-gray text-sm py-6">
          <h6>Made With Love By Finland All Right Reserved </h6>
        </div>
      </div>
    </div>
  );
};

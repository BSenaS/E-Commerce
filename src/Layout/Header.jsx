import {
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaRegUser,
  FaSearch,
  FaRegHeart,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="">
      {/* Dark NavBar */}
      <div className="max-w-full bg-[#252B42]">
        <div className="flex flex-row flex-wrap md:flex-col max-w-[1440px] mx-auto justify-between items-center  min-h-[58px] px-[1.5em]">
          <div className="flex items-center gap-[1.5rem] ">
            <div className="inline-flex  items-center gap-[0.25rem]">
              <FaPhoneAlt className="text-white size-4 " />
              <span className="text-white font-bold	text-sm	">
                (225) 555-0118
              </span>
            </div>
            <div className="inline-flex items-center gap-[0.25rem]">
              <CiMail className="text-white size-4 " />
              <span className="text-white font-bold	text-sm	">
                batuhansenasert@gmail.com
              </span>
            </div>
          </div>
          <div>
            <h6 className="text-white font-bold text-sm">
              Follow Us and get a chance to win 80% off
            </h6>
          </div>
          <div className="inline-flex gap-[0.5rem]">
            <span className="text-white text-sm font-bold">Follow Us:</span>
            <FaInstagram className="text-white size-5" />
            <FaYoutube className="text-white size-5" />
            <FaFacebook className="text-white size-5" />
            <FaTwitter className="text-white size-5" />
          </div>
        </div>
      </div>
      {/*Navbar Light */}
      <div className="flex justify-between items-center px-[1.5em] max-w-[1440px] mx-auto md:flex-col flex-wrap">
        <nav className="inline-flex items-center gap-[2rem] md:flex-col md:w-full">
          <div className="py-4 ">
            <h3 className="text-2xl font-bold">Bandage</h3>
          </div>
          <div className="flex gap-[1rem] font-bold text-[#737373] text-sm ml-20 md:ml-0 md:flex-col">
            <Link to={"/"}>Home</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link>About</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            <Link>Pages</Link>
          </div>
        </nav>
        <div className="inline-flex justify-end items-center text-[#23A6F0] gap-6">
          <div className="flex gap-2 items-center sm:hidden">
            <FaRegUser />
            <span>Login</span>
            <span>/</span>
            <span>Register</span>
          </div>
          <div className="flex gap-4 flex-wrap">
            <FaSearch className="size-5" />
            <MdOutlineShoppingCart className="size-5" />
            <FaRegHeart className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

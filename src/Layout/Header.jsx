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
import { RxHamburgerMenu } from "react-icons/rx";

import { CiMail } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutActionCreator } from "../store/actions/userAction";
import { GravatarPP } from "../Components/GravatarPP";
import { ShopDropDown } from "../Components/ShopDropDown";
import { ShoppingCartDropDown } from "../Components/ShoppingCartDropDown";

export const Header = () => {
  const userLoggedIn = useSelector((store) => store.user);
  const userEmail = useSelector((store) => store.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Log out oldugun da, reducerdan kullancı bilgileri ve localStorage'den token silinir.
  const logOutHandler = () => {
    dispatch(logOutActionCreator());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="md:w-full">
      {/* Dark NavBar */}
      <div className="max-w-full bg-[#252B42] md:hidden">
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
        <nav className="inline-flex items-center gap-[2rem] w-full justify-between md:flex-wrap">
          <div className="flex py-4  md:inline-flex">
            <Link to={"/"}>
              <h3 className="text-2xl font-bold">Bandage</h3>
            </Link>
          </div>
          <div className="flex gap-[1rem] font-bold text-[#737373] text-sm ml-20 md:ml-0 md:flex-col md:w-full md:items-center md:text-xl md:order-last md:mb-12 items-center">
            <Link to={"/"}>Home</Link>
            <Link to={"/shop"}>
              <ShopDropDown />
            </Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/product"}>Pages</Link>
          </div>
          <div className="inline-flex justify-end items-center text-[#23A6F0] gap-6">
            <div className="flex gap-2 items-center md:hidden">
              {userLoggedIn.isLoggedIn ? (
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <GravatarPP email={userEmail} />
                  </span>
                  <span>{userLoggedIn.userName}</span>
                </div>
              ) : (
                <div className="flex justify-center items-center gap-2">
                  <FaRegUser />
                  <Link to={"/login"}>
                    <span className="cursor-pointer">Login</span>
                  </Link>
                </div>
              )}
              <span>/</span>
              {userLoggedIn.isLoggedIn ? (
                <span
                  className="cursor-pointer"
                  onClick={() => logOutHandler()}
                >
                  Log Out
                </span>
              ) : (
                <Link to={"/signup"}>Register</Link>
              )}
            </div>
            <div className="flex gap-4 flex-wrap md:w-full md:text-sBlack">
              <FaSearch className="size-5" />{" "}
              {/* <MdOutlineShoppingCart className="size-5 cursor-pointer">
                
              </MdOutlineShoppingCart> */}
              <ShoppingCartDropDown />
              <FaRegHeart className="size-5 md:hidden" />
              <RxHamburgerMenu className="size-5 hidden md:inline-flex" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

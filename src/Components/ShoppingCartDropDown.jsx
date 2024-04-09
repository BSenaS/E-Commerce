import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export const ShoppingCartDropDown = () => {
  const cartItems = useSelector((store) => store.shoppingCart.cart);
  const cartLenght = cartItems.length;
  //Genderdan bize -> k ya da e dönüyor.

  return (
    <div className="mx-auto flex items-center justify-center ">
      <div className="group relative cursor-pointer ">
        <div className="flex items-center justify-between  bg-white ">
          <a className="menu-hover flex">
            <MdOutlineShoppingCart className="size-5 cursor-pointer" />
            {cartLenght > 0 && (
              <span className="ml-1 text-red-700 font-bold">{cartLenght}</span>
            )}
          </a>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="invisible absolute  flex w-[300px] flex-col bg-gray-100 py-1 px-2 text-gray-800 shadow-xl group-hover:visible">
          {cartItems.map((item, index) => (
            <div
              className="my-2 block border-b border-gray-100 py-1  hover:text-black md:mx-2"
              key={index}
            >
              <div className="flex flex-row">
                <img
                  src={item.product.images[0].url}
                  alt={item.product.id}
                  className="w-[100px] h-[70px]"
                />
                <div className="flex flex-col">
                  {item.product.description}
                  <div>
                    {`Beden: 32`} {`Adet: ${item.count}`}
                  </div>
                  <span className="">{item.product.price}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-row justify-between">
            <Link className="px-2 py-2">Sepete Git</Link>
            <Link className="px-2 py-2">Siparişi Tamamla</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

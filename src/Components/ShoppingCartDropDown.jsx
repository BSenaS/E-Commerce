import { useDispatch, useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { updateCartItemCount } from "../store/actions/shoppingCartAction";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect } from "react";

export const ShoppingCartDropDown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.shoppingCart.cart);
  const cartLenght = cartItems.length;

  //ShoppingCart'a eklenen toplam ürün sayısı.
  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.count,
    0
  );

  useEffect(() => {
    console.log("Carttaki itemler -> ", cartItems);
  }, [cartItems]);

  return (
    <div className="relative mx-auto flex items-center justify-center z-50">
      <div className="group  cursor-pointer ">
        <div className="flex items-center justify-between  bg-white ">
          <a className="menu-hover flex">
            <MdOutlineShoppingCart className="size-6 cursor-pointer" />
            {cartLenght > 0 && (
              <span className="ml-1 font-bold">{cartLenght}</span>
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
        <div className="invisible absolute flex w-[350px] max-h-[350px] flex-col bg-gray-100 py-1 px-2 text-gray-800 shadow-xl group-hover:visible right-0 overflow-auto md:-right-20 pt-4">
          <div className="flex flex-row font-bold justify-between items-center">
            <div>
              <span>My Cart </span>
              {`(${totalItemCount} Product)`}
            </div>
            <div>
              <FaRegTrashAlt size={18} className="text-pBlue" />
            </div>
          </div>
          {cartItems.map((item, index) => (
            <div
              className="my-2 block border-b border-gray-300 py-1  hover:text-black md:mx-2 "
              key={index}
            >
              <div className="flex flex-row justify-around">
                <img
                  src={item.product.images[0].url}
                  alt={item.product.id}
                  className="w-[100px] h-[120px]"
                />
                <div className="flex flex-col gap-2">
                  <span className="font-semibold">{item.product.name}</span>
                  <div>
                    <span className="font-semibold text-green-600 text-sm">{`$${
                      item.product.price * item.count
                    }`}</span>
                  </div>
                  <div className="flex flex-row font-semibold items-center justify-between">
                    <div className="flex flex-row gap-2 font-semibold">
                      <button
                        className="bg-pBlue px-2 rounded-md text-white"
                        onClick={() =>
                          dispatch(
                            updateCartItemCount(item.product.id, item.count - 1)
                          )
                        }
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        className="bg-pBlue px-2 rounded-md text-white"
                        onClick={() =>
                          dispatch(
                            updateCartItemCount(item.product.id, item.count + 1)
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <FaRegTrashAlt size={18} className="text-pBlue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-row justify-between mx-auto">
            <Link className="bg-pBlue px-6 py-2 rounded-md text-white font-semibold">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

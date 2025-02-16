import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  useGetCartItemsQuery,
  useRemoveFromCartMutation,
} from "../Slices/cartApiSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoIosArrowBack } from "react-icons/io";
import { useGetAddressQuery } from "../Slices/userApiSlice";

const CartScreen = () => {
  const { data: products, error, isLoading } = useGetCartItemsQuery();
  const { data: address } = useGetAddressQuery();
  console.log(address);
  const [removeFromCart] = useRemoveFromCartMutation();
  const navigate = useNavigate();

  const removeFromCartHandler = async (productId) => {
    try {
      await removeFromCart({ productId }).unwrap();
      toast.success("product deleted");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  const backHandler = () => {
    window.history.back();
  };

  const checkOutHandler = () => {
    if (address && address.name) {
      return navigate("/ordersummary");
    } else {
      return navigate("/shipping");
    }
  };
  return (
    <>
      <span
        className="btn btn-circle bg-white text-black"
        onClick={backHandler}
      >
        <IoIosArrowBack />
      </span>
      {products?.cartItems?.length > 0 ? (
        <div className="h-screen">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          {products?.cartItems.map((items, index) => {
            return (
              <div
                key={index}
                className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
              >
                <div className="rounded-lg md:w-2/3">
                  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <Link to={`/productinfo/${items.productId._id}`}>
                      <img
                        src={items.productId.image}
                        alt="product-image"
                        className="w-full rounded-lg sm:w-40"
                      />
                    </Link>
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between text-gray-700">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {items.productId.name}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">
                          {items.productId.rating}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">${items.productId.price}</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            onClick={() =>
                              removeFromCartHandler(items.productId._id)
                            }
                          >
                            <path d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mt-6 mx-auto rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 text-gray-700">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">
                ${products?.subTotalPrice?.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">
                ${products?.shippingPrice?.toFixed(2)}
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  ${products?.totalPrice?.toFixed(2)} USD
                </p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button
              disabled={products?.cartItems?.length === 0}
              onClick={checkOutHandler}
              className="mt-6 w-full rounded-md bg-slate-900 py-1.5 font-medium text-white hover:bg-gray-700 cursor-pointer"
            >
              Check out
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex mt-5 gap-2 justify-center text-4xl">
            <h1 className="">Your Cart is Empty</h1>
            <Link className="text-blue-600" to={"/"}>
              <h1>Add Products</h1>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default CartScreen;

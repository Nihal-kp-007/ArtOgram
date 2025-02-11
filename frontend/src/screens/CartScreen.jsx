import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetCartItemsQuery } from "../Slices/productsApiSlice";
import { Link } from "react-router-dom";

const CartScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const userId = userInfo._id;
  const { data: products, error, isLoading } = useGetCartItemsQuery(userId);
  // console.log(products);

  useEffect(() => {}, []);
  return (
    <div className="h-screen  pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      {products?.cart?.map((items, index) => {
        return (
          <Link to={`/productinfo/${items._id}`} 
            key={index}
            className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
          >
            <div className="rounded-lg md:w-2/3">
              <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                  src={items.image}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between text-gray-700">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      Nike Air Max 2019
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">259.000 ₭</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
      <div className="mt-6 mx-auto rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 text-gray-700">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-slate-900 py-1.5 font-medium text-white hover:bg-gray-700 cursor-pointer">
          Check out
        </button>
      </div>
    </div>
  );
};

export default CartScreen;

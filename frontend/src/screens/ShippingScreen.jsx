const ShippingScreen = () => {
  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-3 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:mx-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex  items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  1
                </a>
                <span className="font-semibold text-gray-900">Address</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-500">
                  Order Summery
                </span>
              </li>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 rounded-2xl mx-4">
          <p className="text-xl font-medium text-black">Delivery Address</p>
          <p className="text-gray-400">
            Complete by providing your Delivery Address.
          </p>
          <div className="text-black">
            <div className="mb-3 mt-3">
              <input
                type="text"
                id="name"
                name="name"
                className=" rounded-md w-full border border-gray-200 px-4 py-3 pl-4 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Full Name (Required)*"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="phone-number"
                name="phone-number"
                className=" rounded-md w-full border border-gray-200 px-4 py-3 pl-4 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Phone number"
              />
            </div>

            <div className="flex mb-3 gap-2.5">
              <input
                type="text"
                name="pincode"
                className=" rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Pincode (Required)*"
              />
              <input
                type="text"
                name="state"
                className=" rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="state (Required)*"
              />
            </div>

            <div className="flex mb-3">
              <input
                type="text"
                name="house"
                className=" rounded-md w-full border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="House No. (Required)*"
              />
            </div>
            <div className="flex mb-3">
              <input
                type="text"
                name="Road-name"
                className=" rounded-md w-full border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Road name (Required)*"
              />
            </div>
          </div>
          <button className="mt-4 mb-8 w-full  rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default ShippingScreen;

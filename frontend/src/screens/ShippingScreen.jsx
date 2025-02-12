import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {
  const navigate = useNavigate();
  const placeOrderHandler = async () => {
    navigate("/ordersummary")
  };
  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-3 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <CheckoutSteps step1 />
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
          <button
            onClick={placeOrderHandler}
            className="mt-4 mb-8 w-full  rounded-md bg-gray-900 px-6 py-3 font-medium text-white cursor-pointer hover:bg-gray-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default ShippingScreen;

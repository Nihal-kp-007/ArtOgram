import React, { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useGetCartItemsQuery } from "../Slices/cartApiSlice";
import { useCreateOrderMutation } from "../Slices/orderApiSlice";
import toast from "react-hot-toast";
import { useGetAddressQuery } from "../Slices/userApiSlice";

const PaymentScreen = () => {
  const { data: productsPrice } = useGetCartItemsQuery();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [createOrder, { error, isLoading }] = useCreateOrderMutation();
  const { data: cartproducts } = useGetCartItemsQuery();
  const { data: address } = useGetAddressQuery();
  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const placeOrderHandler = async () => {
    console.log("dsgfdfh")
    try {
      const res = await createOrder({
        cartItems: cartproducts?.cartItems,
        shippingAddress: address,
        paymentMethod: selectedPayment,
        paymentResult: "",
        subTotalPrice: cartproducts?.subTotalPrice,
        shippingPrice: cartproducts?.shippingPrice,
        totalPrice: cartproducts?.totalPrice,
      }).unwrap();
      console.log(res)
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-3 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <CheckoutSteps step1 step2 step3 />
      </div>
      <div className="mt-5 flex justify-center">
        <div className="font-[sans-serif] lg:flex lg:items-center lg:justify-center  max-lg:py-4">
          <div className=" bg-gray-50 p-8 w-full max-w-5xl max-lg:max-w-xl mx-auto rounded-md">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center">
              Payment Method
            </h2>

            <div className="grid lg:grid-cols-3 gap-6 max-lg:gap-8 mt-16">
              <div className="lg:col-span-2">
                <h3 className="text-lg font-bold text-gray-800">
                  Choose your payment method
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="card"
                      name="payment"
                      value="card"
                      onChange={handlePaymentChange}
                      checked={selectedPayment === "card"}
                    />
                    <label
                      className="ml-4 flex gap-2 cursor-pointer"
                      htmlFor="card"
                    >
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        className="w-12"
                        alt="payment"
                      />
                      <img
                        src="https://readymadeui.com/images/american-express.webp"
                        className="w-12"
                        alt="card2"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        className="w-12"
                        alt="card3"
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="paypal"
                      name="payment"
                      value="paypal"
                      onChange={handlePaymentChange}
                      checked={selectedPayment === "paypal"}
                    />
                    <label
                      className="ml-4 flex gap-2 cursor-pointer"
                      htmlFor="paypal"
                    >
                      <img
                        src="https://readymadeui.com/images/paypal.webp"
                        className="w-20"
                        alt="paypalCard"
                      />
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="razorpay"
                      name="payment"
                      value="razorpay"
                      onChange={handlePaymentChange}
                      checked={selectedPayment === "razorpay"}
                    />
                    <label
                      className="ml-4 flex gap-2 cursor-pointer"
                      htmlFor="razorpay"
                    >
                      <img
                        src="https://imgs.search.brave.com/F4Uf5RgBMPHfZWseWxpyCl4oFCSXRnDrii7Cq411aJo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmNjMWRhYjE1MGQ1/ZGU5YTNkYWQ1ZmIu/cG5n"
                        className="w-20"
                        alt="RazorPay"
                      />
                    </label>
                  </div>
                </div>

                {selectedPayment == "card" ? (
                  <form className="mt-8">
                    <div className="grid sm:col-span-2 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Name of card holder"
                          className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Postal code"
                          className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Card number"
                          className="col-span-full px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="EXP."
                          className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="CVV"
                          className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                      <button
                        type="button"
                        className="btn px-7 py-3.5 text-sm tracking-wide bg-gray-200 hover:bg-gray-50 text-gray-800 rounded-md"
                      >
                        Pay later
                      </button>
                      <button
                        type="button"
                        className="btn px-7 py-3.5 text-sm tracking-wide bg-gray-900 text-white rounded-md hover:bg-gray-700"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <div></div>
                )}
                {selectedPayment === "razorpay" ? (
                  <button
                    onClick={placeOrderHandler}
                    type="button"
                    className="btn px-7 py-3.5 text-sm tracking-wide bg-gray-900 text-white rounded-md hover:bg-gray-700"
                  >
                    Proceed
                  </button>
                ) : (
                  <div></div>
                )}
                {selectedPayment === "paypal" ? (
                  <div>
                    <h1 className="text-red-700 font-medium">
                      !!! corrently paypal is not able to use
                    </h1>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div className="bg-white p-6 shadow-2xl rounded-md max-lg:-order-1">
                <h3 className="text-lg font-bold text-gray-800">Summary</h3>
                <ul className="text-gray-800 mt-6 space-y-3">
                  <li className="flex flex-wrap gap-4 text-sm">
                    Sub total{" "}
                    <span className="ml-auto font-bold">
                      ${productsPrice?.subTotalPrice?.toFixed(2)}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Discount
                    <span className="ml-auto font-bold">$0.00</span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Tax <span className="ml-auto font-bold">$0.00</span>
                  </li>
                  <hr />
                  <li className="flex flex-wrap gap-4 text-base font-bold">
                    Total{" "}
                    <span className="ml-auto">
                      ${productsPrice?.totalPrice?.toFixed(2)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentScreen;

import { useSelector } from "react-redux";
import { useGetMyOrdersQuery } from "../Slices/orderApiSlice";
import { Link } from "react-router-dom";

const OrdersListScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { data } = useGetMyOrdersQuery();

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
          <div className="flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center  text-3xl font-bold font-manrope leading-normal">
              {userInfo.name}, Thank You for Your Order!
            </h2>
            <p className="max-w-xl text-center  text-lg font-normal leading-8">
              Your order is in good hands! We'll notify you once it's en route.
              For now, here a snapshot of your purchase.
            </p>
          </div>

          {/* Loop through all orders */}
          {data?.map((order, orderIndex) => (
            <div
              key={orderIndex}
              className="w-full flex-col justify-start items-center lg:gap-10 gap-8 flex mb-10"
            >
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full flex-col justify-start items-start gap-5 flex">
                  {/* Order header */}
                  <h3 className="text-xl font-medium leading-8">
                    OrderNo:{orderIndex + 1}
                  </h3>
                  <div className="w-full md:px-6 px-2 py-4 border-y border-gray-200 justify-between items-center inline-flex">
                    <h3 className="text-xl font-medium leading-8">Items</h3>
                    <h3 className="text-right text-xl font-medium leading-8">
                      Total
                    </h3>
                  </div>

                  {/* Loop through order items */}
                  {order?.orderItems?.map((item, index) => (
                    <div
                      key={index}
                      className="w-full md:px-6 px-2 pb-5 justify-between items-center gap-8 inline-flex border-b border-gray-300"
                    >
                      <div className="justify-start items-center gap-6 flex md:pb-5">
                        <Link to={`/productinfo/${item?.product?._id}`}>
                          {" "}
                          <img
                            className="object-cover w-24"
                            src={item?.product?.image}
                            alt={item?.product?.name || "Product Image"}
                          />
                        </Link>
                        <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                          <h5 className="text-lg font-semibold leading-relaxed">
                            {item?.product?.name}
                          </h5>
                          <h6 className="text-base font-normal leading-relaxed">
                            QTY: {item?.quantity || 1}
                          </h6>
                        </div>
                      </div>
                      <h4 className="text-right text-lg font-medium leading-relaxed">
                        ${item?.product?.price || "0.00"}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* Order details like shipping, payment, and totals */}
                <div
                  key={orderIndex}
                  className="w-full md:pt-6 justify-start items-center gap-5 flex md:flex-row flex-col"
                >
                  <div className="w-full md:px-6 px-2 flex-col justify-start items-start gap-5 inline-flex md:border-r md:border-b-0 border-b md:pb-0 pb-5 border-gray-200">
                    <div className="w-full justify-between items-center inline-flex gap-4">
                      <h5 className="text-lg font-normal leading-relaxed">
                        Estimated Delivery:
                      </h5>
                      <h5 className="text-right text-lg font-normal leading-relaxed">
                        Friday, 10th Mar 2025{" "}
                        {/* Example date, could be dynamic */}
                      </h5>
                    </div>
                    <div className="w-full justify-between items-center inline-flex gap-4 border-y border-gray-200 py-5">
                      <h5 className="text-lg font-normal leading-relaxed">
                        Delivery Address:
                      </h5>
                      <h5 className="text-right text-lg font-normal leading-relaxed">
                        {order?.shippingAddress?.name},
                        {order?.shippingAddress?.houseNumber},
                        {order?.shippingAddress?.postalCode}
                      </h5>
                    </div>
                    <div className="w-full justify-between items-center inline-flex gap-4">
                      <h5 className="text-lg font-normal leading-relaxed">
                        Payment Method
                      </h5>
                      <h5 className="text-right text-lg font-normal leading-relaxed">
                        {order?.paymentMethod || "Not provided"}
                      </h5>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="w-full md:px-6 px-2 flex-col justify-start items-start gap-5 inline-flex">
                    <div className="w-full pb-6 border-b border-gray-200 flex-col justify-start items-start gap-6 flex">
                      <div className="w-full justify-between items-start gap-6 inline-flex">
                        <h5 className="text-lg font-normal leading-relaxed">
                          Subtotal
                        </h5>
                        <h5 className="text-right text-lg font-semibold leading-relaxed">
                          ${order?.subTotalPrice || "0.00"}
                        </h5>
                      </div>
                      <div className="w-full justify-between items-start gap-6 inline-flex">
                        <h5 className="text-lg font-normal leading-relaxed">
                          Shipping
                        </h5>
                        <h5 className="text-right text-lg font-semibold leading-relaxed">
                          ${order?.shippingPrice || "0.00"}
                        </h5>
                      </div>
                    </div>
                    <div className="w-full justify-between items-start gap-6 inline-flex">
                      <h4 className="text-indigo-600 text-xl font-semibold leading-8">
                        Total
                      </h4>
                      <h4 className="text-right text-indigo-600 text-xl font-semibold leading-8">
                        ${order?.totalPrice || "0.00"}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Action Buttons */}
          <div className="w-full justify-center items-center gap-8 flex sm:flex-row flex-col">
            <button className="md:w-fit w-full px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
              <Link to={"/"}>
                <span className="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed">
                  Back to Shopping
                </span>
              </Link>
            </button>
            <button className="md:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Track My Order
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersListScreen;

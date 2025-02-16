import { Link } from "react-router-dom";
import { useGetAddressQuery } from "../Slices/userApiSlice";

const CheckoutSteps = ({ step1, step2, step3 }) => {
  const { data: address } = useGetAddressQuery();
  const isAddressAvailable = address && Object.keys(address).length > 0;
  return (
    <div className="mt-4 py-2 text-xs sm:mt-0 sm:mx-auto sm:text-base">
      <div className="relative">
        <ul className="relative flex  items-center justify-between space-x-2 sm:space-x-4">
          {step1 ? (
            <Link to={isAddressAvailable ? "/ordersummary" : "/shipping"} disabled={isAddressAvailable}>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <p className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">
                  1
                </p>
                <span className="font-semibold text-gray-900">Address</span>
              </li>
            </Link>
          ) : (
            <Link disabled to={"/shipping"}>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <p className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">
                  1
                </p>
                <span className="font-semibold text-gray-500">Address</span>
              </li>
            </Link>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
          {step2 ? (
            <Link to={"/ordersummary"}>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <p className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">
                  2
                </p>
                <span className="font-semibold text-gray-900">
                  Order Summary
                </span>
              </li>
            </Link>
          ) : (
            <Link>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <p className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white">
                  2
                </p>
                <span className="font-semibold text-gray-500">
                  Order Summary
                </span>
              </li>
            </Link>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
          {step3 ? (
            <Link to={"/payment"}>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <p className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">
                  3
                </p>
                <span className="font-semibold text-gray-900">Payment</span>
              </li>
            </Link>
          ) : (
            <Link>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <p className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white">
                  3
                </p>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CheckoutSteps;

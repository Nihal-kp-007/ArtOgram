import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { useGetAddressQuery } from "../Slices/userApiSlice";
import EditAddressModal from "../components/EditAddressModal";

const OrderSummary = () => {
  const { data: address } = useGetAddressQuery();
  const navigate = useNavigate();
  const continueHandler = async () => {
    navigate("/payment");
  };
  // const editHandler = () => {
  //   <EditAddressModal />
  // }
  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-3 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <CheckoutSteps step1 step2 />
      </div>
      <div className="mt-5 flex justify-center">
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 rounded-2xl mx-4 text-black">
          <h1 className="text-3xl font-bold pb-5 border-b-2 mb-5">
            Order Summary
          </h1>
          <p className="text-xl font-medium text-black">Delivery To:</p>
          <div className="pb-5 border-b-2 mb-5">
            <div className="text-black">
              <p className="font-bold">{address?.name}</p>
              <div className="flex">
                <p className="font-medium">{address?.houseNumber},</p>
                <p className="font-medium">{address?.roadName},</p>
                <p className="font-medium">{address?.state},</p>
                <p className="font-medium">{address?.postalcode}</p>
              </div>
              <p className="font-medium">{address?.phoneNumber}</p>
            </div>
            <div className="text-blue-700 text-md cursor-pointer mt-2">
              <EditAddressModal />
            </div>
          </div>
          <div className=" h-[190px] overflow-auto pb-5 border-b-2 mb-5">
            <div className="flex gap-10">
              <div className="size-16">
                <img
                  src="https://imgs.search.brave.com/jvCre8FAk7FP_2BmlDuwweUYOEFK2rLB8AgcTMEr6Tk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTIvMTAtYmVz/dC10YWlsd2luZC1j/c3MtY29tcG9uZW50/LXRlbXBsYXRlLWNv/bGxlY3Rpb25zLnBu/Zw"
                  alt="productImage"
                />
              </div>
              <p>Product name</p>
              <p>$512</p>
            </div>
            <div className="flex gap-10">
              <div className="size-16">
                <img
                  src="https://imgs.search.brave.com/jvCre8FAk7FP_2BmlDuwweUYOEFK2rLB8AgcTMEr6Tk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTIvMTAtYmVz/dC10YWlsd2luZC1j/c3MtY29tcG9uZW50/LXRlbXBsYXRlLWNv/bGxlY3Rpb25zLnBu/Zw"
                  alt="productImage"
                />
              </div>
              <p>Product name</p>
              <p>$512</p>
            </div>
            <div className="flex gap-10">
              <div className="size-16">
                <img
                  src="https://imgs.search.brave.com/jvCre8FAk7FP_2BmlDuwweUYOEFK2rLB8AgcTMEr6Tk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTIvMTAtYmVz/dC10YWlsd2luZC1j/c3MtY29tcG9uZW50/LXRlbXBsYXRlLWNv/bGxlY3Rpb25zLnBu/Zw"
                  alt="productImage"
                />
              </div>
              <p>Product name</p>
              <p>$512</p>
            </div>
            <div className="flex gap-10">
              <div className="size-16">
                <img
                  src="https://imgs.search.brave.com/jvCre8FAk7FP_2BmlDuwweUYOEFK2rLB8AgcTMEr6Tk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTIvMTAtYmVz/dC10YWlsd2luZC1j/c3MtY29tcG9uZW50/LXRlbXBsYXRlLWNv/bGxlY3Rpb25zLnBu/Zw"
                  alt="productImage"
                />
              </div>
              <p>Product name</p>
              <p>$512</p>
            </div>
            <div className="flex gap-10">
              <div className="size-16">
                <img
                  src="https://imgs.search.brave.com/jvCre8FAk7FP_2BmlDuwweUYOEFK2rLB8AgcTMEr6Tk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTIvMTAtYmVz/dC10YWlsd2luZC1j/c3MtY29tcG9uZW50/LXRlbXBsYXRlLWNv/bGxlY3Rpb25zLnBu/Zw"
                  alt="productImage"
                />
              </div>
              <p>Product name</p>
              <p>$512</p>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="flex justify-between">
              SubTotal Price
              <span>$1570</span>
            </span>
            <span className="flex justify-between pb-5 border-b-2 mb-5">
              Shipping Price
              <span>$1570</span>
            </span>
            <span className="flex justify-between">
              Total Price
              <span>$1570</span>
            </span>
          </div>
          <button
            onClick={continueHandler}
            className="mt-4 mb-8 w-full  rounded-md bg-gray-900 px-6 py-3 font-medium text-white cursor-pointer hover:bg-gray-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;

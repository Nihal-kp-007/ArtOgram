import { Link } from "react-router-dom";
import product from "../../products";
import { useGetWishListItemsQuery } from "../Slices/WishListApiSlice";

const WishListScreen = () => {
  const { data: product } = useGetWishListItemsQuery();
  return (
    <div className="flex">
      {product?.wishListItems?.map((product, index) => {
        return (
          <div key={index}>
            <div className="flex mt-5 flex-wrap">
              <div className="px-5 mt-5">
                <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                  <img
                    className="w-60 h-60 rounded-lg object-cover object-center mx-auto"
                    src={product?.productId?.image}
                    alt="productImage"
                  />
                  <p className="my-1 pl-4 font-bold text-gray-500 line-clamp-1">
                    {product?.productId?.name}
                  </p>
                  <p className="mb-1 ml-4 text-xl font-semibold text-gray-800">
                    ${product?.productId?.price}
                  </p>
                  <Link to={`/productinfo/${product?.productId?._id}`}>
                    <div className="flex justify-center">
                      <button className="btn">More Information</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishListScreen;

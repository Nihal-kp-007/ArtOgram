import { Link } from "react-router-dom";
import product from "../../products";

const WishListScreen = () => {
  return (
    <div className="flex">
      {product.map((product, index) => {
        return (
          <div key={index}>
            <div className="flex mt-5 flex-wrap">
              <div className="px-5 mt-5">
                <Link>
                  <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                    <img
                      className="w-full rounded-lg object-cover object-center"
                      src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="product"
                    />
                    <p className="my-4 pl-4 font-bold text-gray-500 line-clamp-1">
                      {product.name}
                    </p>
                    <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
                      {product.price}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishListScreen;

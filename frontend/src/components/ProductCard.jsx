import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAddToCartMutation } from "../Slices/cartApiSlice";
import toast from "react-hot-toast";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [AddToCart] = useAddToCartMutation();

  const AddToCartHandler = async (id) => {
    try {
      const productId = id;
      const userId = userInfo._id;
      console.log(productId, userId);
      const res = await AddToCart({ productId }).unwrap();
      toast.success(res.message);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <Link
          to={`/productinfo/${product._id}`}
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        >
          <img
            className="object-cover"
            src={product.image}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </Link>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900 line-clamp-1">
              {product.name}
            </h5>
          </a>
          <div className="flex items-center gap-1 font-bold">
            <Rating value={product?.rating} />
            <span className="text-black">{product?.rating}</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="mr-2">
              <span className="sm:text-2xl font-bold text-slate-900">
                ${product?.price}
              </span>
            </p>

            <button
              onClick={() => AddToCartHandler(product._id)}
              className="flex items-center justify-center rounded-md px-2 py-1 bg-slate-900 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:px-5 sm:py-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

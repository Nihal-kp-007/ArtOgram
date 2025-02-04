import { LoaderIcon } from "react-hot-toast";
import ProductCard from "../components/ProductCard.jsx";
import { useGetProductsQuery } from "../Slices/productsApiSlice.js";

const HomeScreen = () => {
  const { data:products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <LoaderIcon />
      ) : error ? (
        <div>{error.data.message}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <div className="grid m-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 xl:grid-cols-5">
            {products?.map((product, index) => {
              return (
                <div className="" key={index}>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;

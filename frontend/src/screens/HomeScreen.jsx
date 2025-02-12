import ProductCard from "../components/ProductCard.jsx";
import { useGetProductsQuery } from "../Slices/productsApiSlice.js";
import Loader from "../components/Loader.jsx";

const HomeScreen = () => {
  const { data:products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div className="flex justify-center">{error.data.message}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <div className="grid grid-cols-2 m-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 xl:grid-cols-5">
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

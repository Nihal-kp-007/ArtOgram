import ProductCard from "../components/ProductCard.jsx";
import { useGetProductsQuery } from "../Slices/productsApiSlice.js";
import Loader from "../components/Loader.jsx";
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import Hero from "../components/Hero.jsx";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({
    pageNumber,
    keyword,
  });
  return (
    <>
    <Hero />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div className="flex justify-center">{error.data.message}</div>
      ) : (
        <>
          <div className="grid grid-cols-2 m-3 xl:mx-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 xl:grid-cols-5">
            {products?.products?.map((product, index) => {
              return (
                <div className="" key={index}>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </>
      )}
      <Pagination pages={products?.pages} page={products?.page} keyword={keyword} />
    </>
  );
};

export default HomeScreen;

import { apiSlice } from "./apiSlice";

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: "/api/products",
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;

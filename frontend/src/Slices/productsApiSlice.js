import { apiSlice } from "./apiSlice";

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ pageNumber, keyword }) => ({
        url: "/api/products",
        params: { pageNumber, keyword },
      }),
      providesTags: ["Products"],
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `/api/products/${id}`,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApiSlice;

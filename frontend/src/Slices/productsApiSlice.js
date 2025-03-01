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
    getReview: build.mutation({
      query: (data) => ({
        url: `/api/products/${data.id}/review`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products", "Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetReviewMutation } = productsApiSlice;

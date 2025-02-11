import { apiSlice } from "./apiSlice";

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: "/api/products",
      }),
      providesTags: ["Products"],
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `/api/products/${id}`,
      }),
      providesTags: ["Products"],
    }),
    addToCart: build.mutation({
      query: (data) => ({
        url: "/api/products/addtocart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
    getCartItems: build.query({
      query: (userId) => ({
        url: "/api/products/getcartitems",
        method:"POST",
        body: {userId},
      }),
      providesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddToCartMutation,
  useGetCartItemsQuery,
} = productsApiSlice;

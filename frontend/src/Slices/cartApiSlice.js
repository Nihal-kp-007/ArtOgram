import { apiSlice } from "./apiSlice";

const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addToCart: build.mutation({
      query: (data) => ({
        url: "/api/carts/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeFromCart: build.mutation({
      query: (cartData) => ({
        url: "/api/carts/remove",
        method: "DELETE",
        body: cartData,
      }),
      invalidatesTags:["Cart"]
    }),
    getCartItems: build.query({
      query: (userId) => ({
        url: `/api/carts/${userId}`,
      }),
      providesTags:["Cart"]
    }),
  }),
});

export const { useAddToCartMutation , useGetCartItemsQuery, useRemoveFromCartMutation} = cartApiSlice;

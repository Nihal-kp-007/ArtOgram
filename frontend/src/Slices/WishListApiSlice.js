import { apiSlice } from "./apiSlice";

const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addToWishList: build.mutation({
      query: (data) => ({
        url: "/api/wishLists/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["WishList"],
    }),
    getWishListItems: build.query({
      query: () => ({
        url: `/api/wishLists/getProducts`,
      }),
      providesTags: ["WishList"],
    }),
  }),
});

export const { useAddToWishListMutation, useGetWishListItemsQuery } =
  cartApiSlice;

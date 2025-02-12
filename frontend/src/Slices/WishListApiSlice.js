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
      providesTags:["WishList"]
    }),
    // removeFromCart: build.mutation({
    //   query: (cartData) => ({
    //     url: "/api/carts/remove",
    //     method: "DELETE",
    //     body: cartData,
    //   }),
    //   invalidatesTags:["Cart"]
    // }),
  }),
});

export const { useAddToWishListMutation , useGetWishListItemsQuery} = cartApiSlice;

import { apiSlice } from "./apiSlice";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: "/api/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags:["Orders"]
    }),
    getMyOrders: build.query({
      query: () => ({
        url: "/api/orders/myorders",
      }),
      providesTags:["Orders"]
    }),
  }),
});

export const { useCreateOrderMutation, useGetMyOrdersQuery } = orderApiSlice;

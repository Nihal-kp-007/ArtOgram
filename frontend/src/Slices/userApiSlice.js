import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (data) => ({
        url: "/api/users",
        method: "POST",
        body: data,
      }),
      providesTags: ["Users"],
    }),
    authUser: build.mutation({
      query: (data) => ({
        url: "/api/users/auth",
        method: "POST",
        body: data,
      }),
    }),
    logoutUser: build.mutation({
      query: () => ({
        url: "/api/users/logout",
        method: "POST",
      }),
    }),
    addAddress: build.mutation({
      query: (data) => ({
        url: "/api/users/address",
        method: "POST",
        body:data,
      }),
    }),
    getAddress: build.query({
      query: () => ({
        url: "/api/users/address",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useAuthUserMutation,
  useLogoutUserMutation,
  useAddAddressMutation,
  useGetAddressQuery,
} = userApiSlice;

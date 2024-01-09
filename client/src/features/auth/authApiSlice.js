import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/api/auth/login',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    logout: builder.mutation({
      query: credentials => ({
        url: '/api/auth/logout',
        method: 'GET'
      })
    })
  })
})

export const {
  useLoginMutation,
  useLogoutMutation
} = authApiSlice

import { apiSlice } from "../../app/api/apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllUsers: builder.mutation({
      query: credentials => ({
        url: '/api/admin/users',
        method: 'GET',
      })
    }),
    getAllBooks: builder.mutation({
      query: credentials => ({  
        url: `/api/admin/books/`,  
        method: 'GET',
      })
    }),
    deleteUser: builder.mutation({
      query: ({ uID }) => ({  
        url: `api/admin/users`,
        method: 'DELETE',
        params: { uID }  // Use query parameters
      })
    }),
    deleteBook: builder.mutation({
      query: ({ bID }) => ({
        url: `api/admin/books`,
        method: 'DELETE',
        params: { bID }  // Use query parameters
      })
    }),
    filterUsers: builder.mutation({
      query: ({ uID }) => ({
        url: `api/admin/users`,
        method: 'GET',
        params: { uID }  // Use query parameters for filtering
      })
    }),
    filterBooks: builder.mutation({
      query: ({ bID }) => ({
        url: `api/admin/books`,
        method: 'GET',
        params: { bID }  // Use query parameters for filtering
      })
    }),
  })
})

export const {
  useGetAllUsersMutation,
  useGetAllBooksMutation,
  useDeleteUserMutation,
  useDeleteBookMutation,
  useFilterUsersMutation,
  useFilterBooksMutation,
} = adminApiSlice;

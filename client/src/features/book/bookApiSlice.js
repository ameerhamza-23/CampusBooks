import { apiSlice } from "../../app/api/apiSlice";

export const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    uploadBook: builder.mutation({
      query: credentials => ({
        url: '/api/books/create',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    deleteBook: builder.mutation({
      query: ({ bID }) => ({  
        url: `/api/books/delete/${bID}`,  
        method: 'DELETE',
      })
    }),
    addToWishlist: builder.mutation({
      query: ({ bID, uID }) => ({  
        url: `api/books/save`,
        method: 'GET',
        params: { bID, uID }  // Use query parameters
      })
    }),
    removeFromWishlist: builder.mutation({
      query: ({ bID, uID }) => ({
        url: `api/books/remove`,
        method: 'DELETE',
        params: { bID, uID }  // Use query parameters
      })
    }),
    getWishlist: builder.mutation({
      query: ({ uID }) => ({
        url: 'api/books/wishlist',
        method: 'GET',
        params: { uID }  // Use query parameters
      })
    }),
  })
})

export const {
  useUploadBookMutation,
  useDeleteBookMutation,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
  useGetWishlistMutation
} = bookApiSlice;

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
        })
    })
})

export const {
    useUploadBookMutation,
    useDeleteBookMutation
} = bookApiSlice

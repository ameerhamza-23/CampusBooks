import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logout } from '../../features/auth/authSlice'
import { Navigate } from 'react-router-dom'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result?.error?.status === 401) {

    const refreshResult = await baseQuery('/refresh', api, extraOptions)

    if (refreshResult?.data) {
      const user = api.getState().auth.user
      const new_data = { ...refreshResult.data, user }
      api.dispatch(setCredentials(new_data))
      result = await baseQuery(args, api, extraOptions)
    }
    else {
      <Navigate to="/dashboard" replace={true} />
      api.dispatch(logout())
    }

  }
  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({})
})

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: 'api',
  tagTypes: ['DashboardMetrics', 'Products', 'Users', 'Expenses'],
  endpoints: (builder) => ({
    // here we define the endpoints of our API
    // each endpoint has a unique key
    // example:
    getPosts: builder.query({
      query: () => '/dashboard',
      providesTags: ['DashboardMetrics'],
    }),
  }),
})

export const {} = api

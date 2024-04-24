import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const footerService: any = createApi({
  reducerPath: 'footerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/', // Your API base URL
    prepareHeaders: (headers) => {
      // Retrieve the bearer token from your state or wherever it's stored
      const token = process.env.API_TOKEN; // Example function to select token from Redux state
      if (token) {
        // Add the bearer token to the headers
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFooters: builder.query<any, any>({
      query: () => 'api/footers?populate=*',
    })
  }),
})
export default footerService;

export const { useGetFootersQuery } = footerService;

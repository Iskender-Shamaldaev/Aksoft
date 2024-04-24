import {fetchBaseQuery} from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:1337/api',

  prepareHeaders(headers) {

    headers.set('Authorization', `Bearer ${process.env.API_TOKEN}`);
    headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const result: any = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403 || result?.response?.status === 403) {
    return {}
  } else if (result?.error?.status === 401 || result?.response?.status) {
    return {}
  }
  return result;
}


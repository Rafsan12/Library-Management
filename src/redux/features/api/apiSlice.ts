import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "lmapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
});

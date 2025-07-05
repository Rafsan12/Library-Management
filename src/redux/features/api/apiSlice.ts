import type { Book } from "@/interface/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "lmapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-system-amber-seven.vercel.app/api",
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getAllBooks: builder.query<Book[], void>({
      query: () => "/books",
      transformResponse: (response: { success: boolean; data: Book[] }) =>
        response.data,
      providesTags: ["Books"],
    }),
  }),
});

export const { useGetAllBooksQuery } = apiSlice;

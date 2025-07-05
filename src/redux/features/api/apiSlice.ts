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
    getBookById: builder.query<Book, string>({
      query: (id) => `books/${id}`,
      transformResponse: (res: { success: boolean; data: Book }) => res.data,
      providesTags: (_result, _error, id) => [{ type: "Books", id }],
    }),
    createBook: builder.mutation<Book, Partial<Book>>({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<Book, { id: string; data: Partial<Book> }>({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
} = apiSlice;

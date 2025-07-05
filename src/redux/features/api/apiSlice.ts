import type { Book } from "@/interface/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "lmapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-system-amber-seven.vercel.app/api",
  }),
  tagTypes: ["Books", "Summary"],
  endpoints: (builder) => ({
    // GET All Books
    getAllBooks: builder.query<Book[], void>({
      query: () => "/books",
      transformResponse: (response: { success: boolean; data: Book[] }) =>
        response.data,
      providesTags: ["Books"],
    }),
    // GET SINGLE BOOK BY ID
    getBookById: builder.query<Book, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (res: { success: boolean; data: Book }) => res.data,
      providesTags: (_result, _error, id) => [{ type: "Books", id }],
    }),
    // CREATE A NEW BOOK
    createBook: builder.mutation<Book, Partial<Book>>({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),
    // EDIT A SINGLE BOOK
    updateBook: builder.mutation<Book, { id: string; data: Partial<Book> }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    // DELETE A SINGLE BOOK BOTH SIDE
    deleteBook: builder.mutation<{ success: boolean; message: string }, string>(
      {
        query: (bookId) => ({
          url: `books/${bookId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Books", "Summary"],
      }
    ),
    //  GET ALL BORROW BOOK
    getBorrowSummary: builder.query<
      { title: string; isbn: string; totalBorrowed: number }[],
      void
    >({
      query: () => "/borrow",
      transformResponse: (res: {
        data: {
          book: { title: string; isbn: string };
          totalQuantity: number;
        }[];
      }) =>
        res.data.map((item) => ({
          title: item.book.title,
          isbn: item.book.isbn,
          totalBorrowed: item.totalQuantity,
        })),
      providesTags: ["Summary"],
    }),
    // GET BORROW A SINGLE BOOK
    borrowBook: builder.mutation<
      { _id: string; book: string; quantity: number; dueDate: string },
      { book: string; quantity: number; dueDate: string }
    >({
      query: ({ book, quantity, dueDate }) => ({
        url: "/borrow/",
        method: "POST",
        body: { book, quantity, dueDate },
      }),
      invalidatesTags: ["Books", "Summary"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useGetBorrowSummaryQuery,
  useBorrowBookMutation,
  useDeleteBookMutation,
} = apiSlice;

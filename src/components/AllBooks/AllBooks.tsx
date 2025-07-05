import type { Book } from "@/interface/interface";
import {
  useDeleteBookMutation,
  useGetAllBooksQuery,
} from "@/redux/features/api/apiSlice";
import { useState } from "react";
import { useNavigate } from "react-router";
import BookCard from "../BookCard/BookCard";
import ViewingBook from "../ViewingBook/ViewingBook";

export default function AllBooks() {
  const { data: books, isLoading, isError } = useGetAllBooksQuery();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [deleteBook] = useDeleteBookMutation();

  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    navigate(`/edit-book/${id}`);
  };

  const handleBorrow = (id: string) => {
    navigate(`/borrow-book/${id}`);
  };

  const handleView = (book: Book) => {
    setSelectedBook(book);
  };

  const handleDelete = async (bookId: string) => {
    if (confirm("Are you sure you want to delete this book?")) {
      try {
        await deleteBook(bookId).unwrap();
        alert("Book deleted successfully!");
      } catch {
        alert("Failed to delete the book.");
      }
    }
  };

  if (isLoading) return <div>Loading books...</div>;
  if (isError) return <div>Error loading books</div>;

  return (
    <div className="p-4">
      <h1 className="text-5xl text-center font-bold mb-6">All Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onEdit={() => handleEdit(book._id)}
            onBorrow={() => handleBorrow(book._id)}
            onView={handleView}
            onDelete={() => handleDelete(book._id)}
          />
        ))}
      </div>

      {selectedBook && (
        <ViewingBook
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
        />
      )}
    </div>
  );
}

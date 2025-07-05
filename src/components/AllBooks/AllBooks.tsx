import type { Book } from "@/interface/interface";
import { useGetAllBooksQuery } from "@/redux/features/api/apiSlice";
import { useState } from "react";
import BookCard from "../BookCard/BookCard";
import ViewingBook from "../ViewingBook/ViewingBook";

const AllBooks = () => {
  const { data: books, isLoading, isError } = useGetAllBooksQuery();

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleEdit = (id: string) => {
    console.log("Edit book", id);
  };

  const handleBorrow = (id: string) => {
    console.log("Borrow book", id);
  };

  const handleView = (book: Book) => {
    setSelectedBook(book);
  };

  const handleDelete = (id: string) => {
    console.log("Delete book", id);
  };

  if (isLoading) return <div>Loading books...</div>;
  if (isError) return <div>Error loading books</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">All Books</h1>
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
};

export default AllBooks;

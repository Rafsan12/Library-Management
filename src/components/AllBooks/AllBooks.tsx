import type { Book } from "@/interface/interface";
import { useState } from "react";
import BookCard from "../BookCard/BookCard";
import ViewingBook from "../ViewingBook/ViewingBook";

const dummyBooks: Book[] = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    isbn: "9780735211292",
    copies: 12,
    available: true,
  },
  {
    id: "2",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    isbn: "9780061122415",
    copies: 5,
    available: false,
  },
];

const AllBooks = () => {
  const [selectedBook, setSelectedBook] = useState<
    (typeof dummyBooks)[0] | null
  >(null);
  const handleEdit = (id: string) => {
    console.log("Edit book", id);
  };
  const handleBorrow = (id: string) => {
    console.log("Borrow book", id);
  };
  const handleView = (book: (typeof dummyBooks)[0]) => setSelectedBook(book);

  const handleDelete = (id: string) => {
    console.log("Delete book", id);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">All Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onEdit={() => handleEdit(book.id)}
            onBorrow={() => handleBorrow(book.id)}
            onView={() => handleView(book)}
            onDelete={() => handleDelete(book.id)}
          />
        ))}
      </div>
      <ViewingBook
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />
    </div>
  );
};

export default AllBooks;

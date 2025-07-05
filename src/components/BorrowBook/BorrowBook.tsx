import {
  useBorrowBookMutation,
  useGetBookByIdQuery,
} from "@/redux/features/api/apiSlice";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const BorrowBook = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: book, isLoading } = useGetBookByIdQuery(id!);
  const [borrowBook, { isLoading: isBorrowing }] = useBorrowBookMutation();

  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (book && book.copies > 0) {
      setQuantity(1);
    }
  }, [book]);

  if (isLoading) return <p>Loading book info...</p>;
  if (!book) return <p>Book not found.</p>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (quantity < 1 || quantity > book.copies) {
      alert(`Quantity must be between 1 and ${book.copies}`);
      return;
    }
    if (!dueDate) {
      alert("Please select a due date");
      return;
    }

    try {
      await borrowBook({ book: id!, quantity, dueDate }).unwrap();

      alert("Book borrowed successfully!");
      navigate("/borrow-summary");
    } catch {
      alert("Failed to borrow the book.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Borrow "{book.title}"</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">
            Quantity (max {book.copies})
          </label>
          <input
            type="number"
            min={1}
            max={book.copies}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isBorrowing}
          className="btn btn-primary w-full"
        >
          {isBorrowing ? "Borrowing..." : "Borrow Book"}
        </button>
      </form>
    </div>
  );
};

export default BorrowBook;

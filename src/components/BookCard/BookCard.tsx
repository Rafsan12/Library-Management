import type { BookCardProps } from "@/interface/interface";

import { Button } from "../ui/button";

const BookCard = ({
  book,
  onEdit,
  onBorrow,
  onView,
  onDelete,
}: BookCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 p-4 transition-all">
      <div className="card-body space-y-2">
        <h2 className="card-title">{book.title}</h2>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
        <p>
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <p>
          <strong>Copies:</strong> {book.copies}
        </p>
        <p>
          <strong>Availability:</strong>{" "}
          <span className={book.available ? "text-success" : "text-error"}>
            {book.available ? "Available" : "Unavailable"}
          </span>
        </p>

        <div className="mt-4 flex flex-wrap gap-6">
          <Button color="primary" onClick={onEdit}>
            Edit
          </Button>
          <Button
            disabled={book.copies === 0}
            color="success"
            onClick={onBorrow}
          >
            Borrow
          </Button>
          <Button color="info" onClick={() => onView(book)}>
            View
          </Button>
          <Button color="error" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

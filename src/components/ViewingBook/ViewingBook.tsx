import type { Book } from "@/interface/interface";

interface ViewingBookProps {
  selectedBook: Book | null;
  setSelectedBook: (book: Book | null) => void;
}

export default function ViewingBook({
  selectedBook,
  setSelectedBook,
}: ViewingBookProps) {
  return (
    <>
      {selectedBook && (
        <>
          <input
            type="checkbox"
            id="view-book-modal"
            className="modal-toggle"
            checked
            readOnly
          />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-2">{selectedBook.title}</h3>
              <p>
                <strong>Author:</strong> {selectedBook.author}
              </p>
              <p>
                <strong>Genre:</strong> {selectedBook.genre}
              </p>
              <p>
                <strong>ISBN:</strong> {selectedBook.isbn}
              </p>
              <p>
                <strong>Copies:</strong> {selectedBook.copies}
              </p>
              <p>
                <strong>Availability:</strong>{" "}
                <span
                  className={
                    selectedBook.available ? "text-success" : "text-error"
                  }
                >
                  {selectedBook.available ? "Available" : "Unavailable"}
                </span>
              </p>
              <div className="modal-action">
                <label
                  htmlFor="view-book-modal"
                  className="btn"
                  onClick={() => setSelectedBook(null)}
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

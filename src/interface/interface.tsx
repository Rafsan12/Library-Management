export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}

export interface BookCardProps {
  book: Book;
  onEdit: () => void;
  onBorrow: () => void;
  onView: (book: Book) => void;
  onDelete: () => void;
}

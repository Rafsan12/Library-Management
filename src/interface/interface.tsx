export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BookCardProps {
  book: Book;
  onEdit: () => void;
  onBorrow: () => void;
  onView: (book: Book) => void;
  onDelete: () => void;
}

export interface BookFormProps {
  initialValues?: Partial<Book>;
  onSubmit: (book: Partial<Book>) => void;
  mode?: "add" | "edit";
}

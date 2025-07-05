import type { Book, BookFormProps } from "@/interface/interface";
import { useState, type FormEvent } from "react";

const genres = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

const BookForm = ({
  initialValues = {},
  onSubmit,
  mode = "add",
}: BookFormProps) => {
  const [form, setForm] = useState<Partial<Book>>({
    title: initialValues.title || "",
    author: initialValues.author || "",
    genre: initialValues.genre || "FICTION",
    isbn: initialValues.isbn || "",
    description: initialValues.description || "",
    copies: initialValues.copies || 1,
    available: initialValues.available ?? true,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";

    setForm((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {mode === "edit" ? "Edit Book" : "Add New Book"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <select
            name="genre"
            value={form.genre}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre.replace("_", " ")}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            ISBN
          </label>
          <input
            name="isbn"
            value={form.isbn}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-y"
            rows={4}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Copies
            </label>
            <input
              name="copies"
              type="number"
              value={form.copies}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              min={1}
              required
            />
          </div>

          <div className="space-y-2 flex  items-center">
            <label className="text-sm mt-6 font-medium text-gray-700 mr-3">
              Available
            </label>
            <input
              name="available"
              type="checkbox"
              checked={form.available}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 mt-4 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {mode === "edit" ? "Update Book" : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;

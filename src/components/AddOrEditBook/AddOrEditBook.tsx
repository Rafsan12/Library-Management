import {
  useCreateBookMutation,
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/features/api/apiSlice";

import type { Book } from "@/interface/interface";
import { useNavigate, useParams } from "react-router";
import BookForm from "../BookForm/BookForm";

const AddOrEditBook = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);

  const { data: book, isLoading } = useGetBookByIdQuery(id!, {
    skip: !isEdit,
  });

  const [createBook] = useCreateBookMutation();
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();

  const handleSubmit = async (formData: Partial<Book>) => {
    if (isEdit) {
      if (!id) {
        alert("Missing book ID for update");
        return;
      }
      await updateBook({ id, data: formData }).unwrap();
    } else {
      await createBook(formData).unwrap();
    }
    navigate("/");
  };

  if (isEdit && isLoading) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-base-200">
      <div className="w-full max-w-xl">
        <BookForm
          mode={isEdit ? "edit" : "add"}
          initialValues={book}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddOrEditBook;

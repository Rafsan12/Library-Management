import { useGetBorrowSummaryQuery } from "@/redux/features/api/apiSlice";

export default function BorrowSummary() {
  const { data: summary, isLoading, isError } = useGetBorrowSummaryQuery();

  if (isLoading) return <p>Loading borrow summary...</p>;
  if (isError) return <p className="text-error">Failed to load summary.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center  mb-4">Borrow Summary</h1>
      <div className="overflow-x-auto">
        <table className="table border-4 table-zebra w-full">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>ISBN</th>
              <th>Total Quantity Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {summary?.map((item, i) => (
              <tr key={i}>
                <td className="border-8">{item.title}</td>
                <td className="border-8">{item.isbn}</td>
                <td className="border-8">{item.totalBorrowed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

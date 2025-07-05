import { Route, Routes } from "react-router";
import AddOrEditBook from "./components/AddOrEditBook/AddOrEditBook";
import AllBooks from "./components/AllBooks/AllBooks";
import BorrowBook from "./components/BorrowBook/BorrowBook";
import BorrowSummary from "./components/BorrowSummary/BorrowSummary";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/add-book" element={<AddOrEditBook />} />
        <Route path="/edit-book/:id" element={<AddOrEditBook />} />
        <Route path="/borrow-summary" element={<BorrowSummary />} />
        <Route path="/borrow-book/:id" element={<BorrowBook />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

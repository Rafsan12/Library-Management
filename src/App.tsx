import { Route, Routes } from "react-router";
import AddOrEditBook from "./components/AddOrEditBook/AddOrEditBook";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddOrEditBook />} />
        <Route path="/edit-book/:id" element={<AddOrEditBook />} />
      </Routes>
    </>
  );
}

export default App;

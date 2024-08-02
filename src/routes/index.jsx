import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ShowBooks from "../pages/Show Books";
import AddBook from "../pages/Add Book";
import Navbar from "./Navbar";
import ErrorPage from "../pages/ErrorPage";
import EditBook from "../pages/Edit Book";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-books" element={<ShowBooks />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/edit-book" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;

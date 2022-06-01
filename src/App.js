import "./App.css";
import MyNav from "./components/nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import ManagePosts from "./pages/ManagePosts";
import NewPost from "./components/admin/newPost";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ManagePosts />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

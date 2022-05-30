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

function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/admin" element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

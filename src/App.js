import "./App.css";
import MyNav from "./components/nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";
import Contact from "./pages/Contact";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

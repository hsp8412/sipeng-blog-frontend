import "./App.css";
import MyNav from "./components/nav";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/footer";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import Login from "./pages/Login";
import NewPost from "./pages/admin/NewPost";
import ProtectedRoute from "./components/protectedRoute";
import EditPost from "./pages/admin/EditPost";
import ManagePosts from "./pages/admin/ManagePosts";
import NotFound from "./pages/notFound";
import Index from "./pages";
import Posts from "./pages/Home";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
          <Route path="/" element={<Index />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route path="/admin" element={<Navigate to="/login" />} />
          <Route path="/admin/posts" element={<ManagePosts />} />
          <Route path="/admin/new-post" element={<NewPost />} />
          <Route path="/admin/post/:id" element={<EditPost />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

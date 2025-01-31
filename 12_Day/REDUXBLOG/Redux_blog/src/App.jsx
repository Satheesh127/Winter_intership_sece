import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewPost from './ViewPost';
import CreatePost from './CreatePost';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className="app-container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<ViewPost posts={posts} />} />
          <Route path="/create" element={<CreatePost addPost={addPost} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

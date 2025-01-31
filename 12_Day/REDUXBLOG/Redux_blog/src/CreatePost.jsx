import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewPost from './ViewPost';
import CreatePost from './CreatePost';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to My Blog",
      content: "This is the first post on this blog. Stay tuned for more updates!",
      author: "Admin",
    },
    {
      id: 2,
      title: "Understanding React Basics",
      content: "React is a powerful JavaScript library for building user interfaces.",
      author: "Jane Doe",
    },
  ]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <>
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
    </>
  );
}

export default App;

import './index.css';

function ViewPost({ posts }) {
  return (
    <div className="view-posts-container">
      <h2>All Posts</h2>
      <div className="posts-grid">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p><strong>Author:</strong> {post.author}</p>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts available. Create a new post to get started!</p>
        )}
      </div>
    </div>
  );
}

export default ViewPost;

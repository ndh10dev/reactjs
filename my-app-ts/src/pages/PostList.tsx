import { Link } from "react-router-dom";

const posts = [
    {id: 1, title: "React la gi?"},
    {id: 2, title: "TypeScript la gi?"},
    {id: 3, title: "React Router la gi?"},
];

export default function PostList() {
  return (
    <div style={{ margin: "20px" }}>
      <h2 className="section-title">Blog Posts</h2>

      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.id} className="blog-item">
            <Link to={`/posts/${post.id}`} className="blog-link">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
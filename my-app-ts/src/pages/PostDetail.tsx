import { useParams, Link } from "react-router-dom";

const posts = [
    {id: 1, title: "React la gi?", content: "React là một thư viện JavaScript mã nguồn mở..."},
    {id: 2, title: "TypeScript la gi?", content: "TypeScript là một ngôn ngữ lập trình mã nguồn mở..."},
    {id: 3, title: "React Router la gi?", content: "React-Router là một thư viện định tuyến (routing) tiêu chuẩn trong React..."},
];

export default function PostDetail() {
    const { postId } = useParams<{ postId: string }>();
    const post = posts.find(p => p.id === Number(postId));
    if (!post) return <div> ❌ Post not found</div>;
    return (
        <div style={{ margin: "20px" }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to="/" className="blog-link">🔙 Back to Home</Link>
        </div>
    );
}
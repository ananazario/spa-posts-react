import posts from 'json/posts.json';
import Post from "components/PostCard";
import './Inicio.css'

export default function Inicio() {
    return (
        <ul className="posts">
            {posts.map((post) => (
            <li key={post.id}>
                <Post post={post} />
            </li>
            ))}
        </ul>
    )
}
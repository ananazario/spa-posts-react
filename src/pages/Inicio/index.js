import Banner from "components/Banner";
import posts from 'json/posts.json';
import * as C from "./Inicio";
import Post from "components/Post";

export default function Inicio() {
    return (
        <main>
            <Banner />
            <C.ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
            </C.ul>
        </main>
    )
}
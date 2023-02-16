import { useParams } from "react-router-dom"
import posts from '../../json/posts.json'
import PostModelo from "components/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './Post.css';

export default function Post() {
    const parametros = useParams();
    
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    console.log(post)

    return (
        <PostModelo 
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}
import { Link } from 'react-router-dom';
import './Post.css'

export default function PostCard( {post} ) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className='post'>
                <img 
                    className='capa'
                    src={`/assets/posts/${post.id}/capa.png`} 
                    alt="Capa do post" 
                />
                <h2>{post.titulo}</h2>
                <button className='botao-ler'>Ler</button>
            </div>
        </Link>
    )
}
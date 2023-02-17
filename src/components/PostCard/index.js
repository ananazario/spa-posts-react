import { Link } from 'react-router-dom';
import './Post.css'
import BotaoPrincipal from 'components/BotaoPrincipal';

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
                <BotaoPrincipal>
                    Ler
                </BotaoPrincipal>
            </div>
        </Link>
    )
}
import * as C from './Post.js'

export default function Post( {post} ) {
    return (
        <C.div>
            <img 
                src={`/assets/posts/${post.id}/capa.png`} 
                alt="Capa do post" 
            />
        </C.div>
    )
}
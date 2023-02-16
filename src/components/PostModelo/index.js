import './PostModelo.css'

export default function PostModelo({ fotoCapa, titulo, children }) {
    return (
        <article className="posts">
            <div style={{ background: `url(${fotoCapa})`}}>

            </div>
            <h2>{titulo}</h2>
            <div>{children}</div>
        </article>
    )
}
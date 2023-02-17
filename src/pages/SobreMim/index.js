import PostModelo from "components/PostModelo";
import fotoCapa from '../../components/PostModelo/background.jpg'
import './SobreMim.css'

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre">
            <h3>
                Sobre React
            </h3>

            <img className="imagem" src={fotoCapa} alt="icone react"/>

            <p>React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam. Views declarativas fazem com que seu código seja mais previsível e simples de depurar.</p>
            <p>Baseado em componentes. Crie componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas. Como a lógica do componente é escrita em JavaScript e não em templates, você pode facilmente passar diversos tipos de dados ao longo da sua aplicação e ainda manter o estado fora do DOM.</p>
        </PostModelo>
    )
}
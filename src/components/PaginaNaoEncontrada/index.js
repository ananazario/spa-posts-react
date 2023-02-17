import BotaoPrincipal from 'components/BotaoPrincipal';
import foto from '../img/erro_404.png'
import './NaoEncontrada.css';
import { useNavigate } from 'react-router-dom';

export default function PaginaNaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>
            <div className='conteudoContainer'>
                <span className='texto404'>404</span>
                <h1 className='titulo'>
                    Ops! Página não encontrada
                </h1>

                <p className='paragrafo'>
                    Tem certeza de que era isso que estava procurando?
                </p>
                <p className='paragrafo'>
                    Aguarde alguns instantes e recarregue a página
                </p>

                <div className='botaoContainer' onClick={() => navegar(-1)}>
                    <BotaoPrincipal>
                        Voltar
                    </BotaoPrincipal>
                </div>

                <img className="imagemCachorro" src={foto} alt='cachorro vestido como humano' />
            </div>

            <div className='espacoEmBranco'></div>
        </>
    )
}
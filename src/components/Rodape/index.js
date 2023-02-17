import * as C from './Rodape.js';
import { ReactComponent as MarcaRegistrada } from '../img/marca_registrada.svg';

export default function Rodape() {
    return (
        <C.footer>
            <MarcaRegistrada />

            Desenvolvido por Alura.
        </C.footer>
    )
}
import * as C from "./style";

export default function Banner() {
    return (
        <C.div>
            <div>
                <h1>Olá mundo!</h1>
                <p>Venha conhecer mais sobre o React e as maravilhas dessa biblioteca</p>
            </div>

            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" />
            </div>
        </C.div>
    )
}
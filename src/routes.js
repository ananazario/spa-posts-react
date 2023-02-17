import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio"
import SobreMim from "./pages/SobreMim"
import Menu from "./components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "components/Post";
import PaginaNaoEncontrada from "components/PaginaNaoEncontrada";
import Rodape from "components/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>

    <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;

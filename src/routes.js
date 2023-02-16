import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio"
import SobreMim from "./pages/SobreMim"
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "components/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        
        <Route path="*" element={<div>Pagina não encontrada</div>} />
      </Routes>
    <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;

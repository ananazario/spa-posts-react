import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio"
import SobreMim from "./pages/SobreMim"
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Pagina não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

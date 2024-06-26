import Favoritos from "pages/Inicio/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "pages/Inicio/Player";
import NotFound from "pages/Inicio/NotFound";
import PaginaBase from "pages/PaginaBase";



function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes
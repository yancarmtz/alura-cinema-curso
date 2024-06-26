import Cabecera from "components/Cabecera/Cabecera"
import Container from "components/Container"
import Pie from "components/Pie/Pie"
import FavoritoProvider from "contexto/Favoritos"
import { Outlet } from "react-router-dom"


function PaginaBase() {
    return (
        <main>
            <Cabecera />
            <FavoritoProvider>
                <Container>
                    <Outlet /> {/*Outlet: genera una ruta padre la 
                                  cual se va encargar de manejar 
                                  todas las rutas padre*/}
                </Container>
            </FavoritoProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase
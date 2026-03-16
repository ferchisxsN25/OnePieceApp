import { BrowserRouter, Routes, Route } from "react-router-dom" //importa herramientas de react router para manejar las rutas 
import Login from "./pages/Login" 
import Dashboard from "./pages/Dashboard" 
import Personajes from "./pages/Personajes" 
import Frutas from "./pages/Frutas" 


function App(){ //componente principal de toda la aplicacion

    return(

        <BrowserRouter> {/*contenedor principal del sistema de rutas */}

            <Routes>{/*contenedor donde se definen todas las rutas */}

                <Route path="/" element={<Login/>}/>
                {/*ruta principal del sitio
                cuando se entra a la pagina se muestra el login */}

                <Route path="/dashboard" element={<Dashboard/>}/>
                {/*ruta para la pagina principal del sistema */}

                <Route path="/personajes" element={<Personajes />}/>
                {/*ruta para la gestion de personajes */}

                <Route path="/frutas" element={<Frutas/>}/>
                {/*ruta para la gestion de frutas */}

            </Routes>

        </BrowserRouter>

    )

}

export default App //exporta el componente principal de la aplicacion

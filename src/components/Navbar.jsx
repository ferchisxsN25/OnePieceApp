import { useNavigate } from "react-router-dom" //importacion

function Navbar(){ // componente

    const navigate = useNavigate() // navegar

    function logout(){  //función cerrar sesión
    localStorage.removeItem("usuario")
    navigate("/")
    }

    return(
        //barra de navegación principal
        <nav className="w-full bg-black/90 backdrop-blur-md overflow-hidden shadow-2xl">
            {/* contenedor interno, botones, titulo, etc. - todo lo visual*/}
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white font-bold">       
                <h1 
                className="text-2xl font-bold text-yellow-400 cursor-pointer"
                onClick={()=>navigate("/dashboard")}  /* navegar inicio*/
                >
                ONE PIECE
                </h1>

                <div className="flex gap-3">
                    <button
                    onClick={()=>navigate("/dashboard")} /* navegar inicio*/
                    className="px-4 py-2 rounded-lg bg-white/40 hover:bg-white/20 transition"
                    >
                    Inicio
                    </button>

                    <button
                    onClick={()=>navigate("/personajes")} /* navegar personajes*/
                    className="px-4 py-2 rounded-lg bg-white/40 hover:bg-white/20 transition"
                    >
                    Personajes
                    </button>

                    <button
                    onClick={()=>navigate("/frutas")} /* navegar frutas*/
                    className="px-4 py-2 rounded-lg bg-white/40 hover:bg-white/20 transition"
                    >
                    Frutas
                    </button>

                    <button
                    onClick={logout} /* sale de sesión*/
                    className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-400 transition"
                    >
                    Salir
                    </button>
                </div>
            </div>
        </nav>

        )

}

export default Navbar //exportar el componente
import { useNavigate } from "react-router-dom" //importaciones 
import fondo from "../assets/onepiece-bg.jpeg"

function Dashboard(){ ////componente nicio

    const navigate = useNavigate() //navegar

    return(
        //contenedor principal,  en el vienen más cositas para lo visual
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative" 
        style={{ backgroundImage: `url(${fondo})` }}
        >

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/10 p-12 rounded-2xl shadow-2xl text-white text-center w-[500px] animate-fade-in">

                <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
                    ¡Inicia tú gran aventura!
                </h1>

                <p className="text-gray-300 mb-10">
                    Administra la tripulación y las frutas del diablo
                </p>

                <div className="flex flex-col gap-6">

                    <button //botón para personajes y enviá a gestionar pesonajes
                        onClick={()=>navigate("/personajes")}
                        className="bg-yellow-500 text-black px-6 py-4 rounded-lg font-bold hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg"
                        >
                        Gestionar Personajes
                    </button>

                    <button // //botón para frutas y enviá a gestionar frutas
                        onClick={()=>navigate("/frutas")}
                        className="bg-yellow-500 text-black px-6 py-4 rounded-lg font-bold hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg"
                        >
                        Gestionar Frutas del Diablo
                    </button>

                    <button  // botón cerrar sesión
                        onClick={()=>navigate("/")}
                        className="mt-4 text-red-400 hover:text-red-300 text-sm"
                        >
                        Cerrar sesión
                    </button>

                </div>

            </div>

        </div>

    )
}

export default Dashboard //exportar el componente
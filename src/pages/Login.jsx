import { useState } from "react" //importaciones 
import { login, register } from "../services/authService"
import fondo from "../assets/onepiece-bg.jpeg"
import { useNavigate } from "react-router-dom"

function Login() {

    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [modoRegistro, setModoRegistro] = useState(false)     // estados (datos que pueden cambiar), crea variables reactivas
    const [mensaje, setMensaje] = useState("")

    const navigate = useNavigate() // navegación entre páginas

    async function handleLogin(){

        const res = await login(usuario,password) // Llama al servicio de login, enviando al backend

        if(res.success){  // caso exitoso, similar a las demás a continuación
            setMensaje("¡Bienvenido de nuevo!")
            
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000)  // tiempo para mandar al inicio

        }else{  // caso falla
            setMensaje("Usuario o contraseña incorrectos")
        }

    }

    async function handleRegister(){

        const ok = await register(usuario,password)

        if(ok){
            setMensaje("¡Empieza una aventura! Usuario creado")
            navigate("/dashboard")
        }else{
            setMensaje("Error al registrar")
        }

    }

    return (

        <div  //contenedores y demás para lo visual, texto dinámico utilizando un operador ternario
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative" //
        style={{ backgroundImage: `url(${fondo})` }}
        >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-2xl w-96 text-white animate-fade-in">

            <h1 className="text-4xl font-extrabold text-center text-yellow-400 mb-2">
                ¡Bienvenido a One Piece!
            </h1>
        
            <p className="text-center text-gray-300 mb-6"> 
                {modoRegistro ? "¡Una nueva aventura te espera!" : "¡Accede de nuevo y disfruta la aventura!"} 
            </p>

            <input type="text" placeholder="Usuario" // input de usuario
                value={usuario}
                onChange={(e)=>setUsuario(e.target.value)}
                className="w-full p-3 mb-4 rounded-lg bg-slate-800/80 border border-slate-600 text-white placeholder-gray-400"
            />

            <input type="password" placeholder="Contraseña" // // input de contra
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full p-3 mb-6 rounded-lg bg-slate-800/80 border border-slate-600 text-white placeholder-gray-400 "
            />

            <button // botón principal
                onClick={modoRegistro ? handleRegister : handleLogin}
                className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg"
            >
                {modoRegistro ? "Crear cuenta" : "Iniciar sesión"}
            </button>

            <p className="text-center mt-4 text-sm text-gray-300">

                {modoRegistro ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}

                <button
                    className="ml-2 text-yellow-400 hover:text-yellow-300 transition"
                    onClick={()=>setModoRegistro(!modoRegistro)}  // cambiar entre login y registro
                >
                    {modoRegistro ? "Iniciar sesión" : "Registrarse"}
                </button>

            </p>

            {mensaje && (  // mostrar mensajes
                <p className="text-center mt-4 text-yellow-300 text-sm">
                    {mensaje}
                </p>
            )}

        </div>

        </div>

    )
}

export default Login //exportar el componente
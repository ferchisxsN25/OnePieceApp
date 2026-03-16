import { useEffect } from "react" //importa el hook useeffect 
function Alert({ mensaje, tipo, onClose }) { //componente alerta ---requisto

    useEffect(() => { //se ejecuta cuando aparece el componente
        const timer = setTimeout(() => { //crea un temporizador
            onClose() //para cerrar la alerta
        }, 4500) 

        return () => clearTimeout(timer) //limpia el temporizador
        //si no se limpia podria ejecutarse cuando el componente ya no exista
    }, [onClose]) //si cambia onclose se vuelve a ejecutar

    const estilos = { ///colores segun el tipo de alerta
        success: "bg-green-700", 
        error: "bg-red-500"
    }

    return ( 

        <div className="fixed top-6 right-6 z-50 animate-fade-in"> {/* contenedor alerta y más visuales */}

            <div className={`px-6 py-4 rounded-xl shadow-lg text-white font-semibold ${estilos[tipo]}`}> {/*aplica el color segun success o error */}

                {mensaje} 
                {/* muestra el mensaje, s no queda vacío */}

            </div>
        </div>

    )
}

export default Alert //exporta el componente 
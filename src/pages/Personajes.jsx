import CRUD from "../components/CRUD" //importar, lo mismo el crud reutilkizable 
import Navbar from "../components/Navbar" 
import fondo from "../assets/onepiece-pers.jpeg" 

function Personajes(){ //componente

    const columnas = ["Nombre", "Tripulación", "Recompensa"] //nombres de las columnas que se mostraran en la tabla

    return(

        <>
        <Navbar/> {/*barra de navegacion */}

            <div className="min-h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${fondo})` }}
            >
            {/*contenedor principal con imagen de fondo*/}

                <div className="min-h-screen bg-black/70 p-10">
                {/*capa oscura sobre la imagen para que el contenido se vea mejor */}

                    <CRUD
                        titulo="Tripulación – Gestión de Personajes"
                        endpoint={`${import.meta.env.VITE_API_URL}/personajes`}
                        //endpoint de la api donde se hacen las peticiones
                        columnas={columnas}
                        idField="id_personaje"
                        //campo id de la base de datos
                        renderInputs={(form,setForm)=>(
                        <>
                        {/*funcion que crea los inputs del formulario */}

                            <input
                                placeholder="Nombre"
                                value={form.nombre || ""}
                                onChange={(e)=>setForm({...form,nombre:e.target.value})}
                                className="w-full p-3 mb-3 rounded-lg bg-black/50 border border-white/20"
                            />
                            <input
                                placeholder="Tripulación"
                                value={form.tripulacion || ""}
                                onChange={(e)=>setForm({...form,tripulacion:e.target.value})}
                                className="w-full p-3 mb-3 rounded-lg bg-black/50 border border-white/20"
                            />
                            <input
                                placeholder="Recompensa"
                                value={form.recompensa || ""}
                                onChange={(e)=>setForm({...form,recompensa:e.target.value})}
                                className="w-full p-3 mb-3 rounded-lg bg-black/50 border border-white/20"
                            />
                        </>
                        )}
                    />
                    {/*se usa el componente crud para manejar toda la logica
                    mostrar personajes, agregar, editar y eliminar */}

                </div>
            </div>
        </>
    )

}

export default Personajes //exporta 
import CRUD from "../components/CRUD" //importar, el crud aquí ya aplica para frutas yb persoanjes, reutilizable
import Navbar from "../components/Navbar" 
import fondo from "../assets/frutas.jpeg"


function Frutas(){ //componente

    const columnas = ["Nombre", "Tipo", "Poder"] //arreglo con los nombres de las columnas que se mostraran en la tabla

    return(

        <>
        <Navbar/> {/* barra de navegacion*/}
            {/*contenedor principal con imagen de fondo*/}
            <div 
                className="min-h-screen bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${fondo})` }} 
            >
                <div className="min-h-screen bg-black/50 p-10">
                    <CRUD
                        titulo="Frutas del Diablo - Gestión de Frutas"
                        endpoint={`${import.meta.env.VITE_API_URL}/frutas`}
                        //endpoint de la api donde se hacen las peticiones
                        columnas={columnas}
                        idField="id_fruta"
                        //campo id de la tabla en la base de datos
                        renderInputs={(form,setForm)=>(
                        <>
                        {/*funcion que genera los inputs del formulario */}

                            <input
                                placeholder="Nombre"
                                value={form.nombre || ""}
                                onChange={(e)=>setForm({...form,nombre:e.target.value})}
                                className="w-full p-3 mb-3 rounded-lg bg-black/50 border border-white/20"
                            />
                            <input
                                placeholder="Tipo"
                                value={form.tipo || ""}
                                onChange={(e)=>setForm({...form,tipo:e.target.value})}
                                className="w-full p-3 mb-3 rounded-lg bg-black/50 border border-white/20"
                            />
                            <input
                                placeholder="Poder"
                                value={form.poder || ""}
                                onChange={(e)=>setForm({...form,poder:e.target.value})}
                                className="w-full p-3 mb-3 rounded-lg bg-black/50 border border-white/20"
                            />
                        </>
                        )}
                    />
                    {/*se usa el componente crud para manejar
                    agregar, editar, mostrar y eliminar frutas */}

                </div>
            </div>

        </>

        )

}

export default Frutas //exporta 
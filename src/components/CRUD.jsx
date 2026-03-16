import { useEffect, useState } from "react" //importa hooks 
import Tabla from "./Tabla" 
import Modal from "./Modal" 
import Alert from "./Alerta" 

function CRUD({ titulo, endpoint, columnas, renderInputs, idField }) { //componente CRUD ---requisIto

    const [datos,setDatos] = useState([])  //guarda los datos que vienen de la api
    const [modalAbierto,setModalAbierto] = useState(false)//controla si el modal de agregar o editar esta abierto 
    const [form,setForm] = useState({}) //guarda los datos del formulario
    const [confirmarEliminar,setConfirmarEliminar] = useState(false) //controla si aparece el modal de confirmar eliminacion
    const [registroAEliminar,setRegistroAEliminar] = useState(null) //guarda el registro que se quiere eliminar
    const [alerta,setAlerta] = useState(null) //guarda la alerta que se mostrara

    function cargar(){
        fetch(endpoint) //hace peticion a la api
        .then(res=>res.json()) ///respuesta a json
        .then(data=>setDatos(data)) //guarda datos en el estado
    }

    useEffect(()=>{ //si no se usa useeffect los datos no se cargarian al inicio
        cargar() //carga los datos al iniciar el componente
    },[])

    function guardar(){
        const esEdicion = form[idField] 
        //verifica si el registro ya tiene id para saber si es edicion

        const url = esEdicion
        ? `${endpoint}/actualizar/${form[idField]}` //ruta para editar
        : `${endpoint}/insertar` //ruta para insertar

        const metodo = esEdicion ? "PUT" : "POST" 
        //si es edicion usa put, si es nuevo usa post

        fetch(url,{
            method: metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(form) 
            //convierte el formulario a json para enviarlo
        })
        .then(()=>{

            setAlerta({
                mensaje: esEdicion 
                ? "Registro editado correctamente"
                : "Registro agregado correctamente",
                tipo:"success"
            })
            //muestra alerta de exito

            cargar() //recarga la tabla
            setForm({}) //limpia el formulario
            setModalAbierto(false) //cierra el modal

        })
        .catch(()=>{

            setAlerta({
                mensaje: esEdicion
                ? "Error al editar registro"
                : "Error al agregar registro",
                tipo:"error"
            })
            //muestra alerta si ocurre error

        })

    }

    function editar(item){
        setForm(item) //carga los datos del registro al formulario
        setModalAbierto(true) //abre el modal para editar
    }

    function eliminar(item){
        setRegistroAEliminar(item) //guarda el registro a eliminar
        setConfirmarEliminar(true) //abre el modal de confirmacion
    }

    function confirmarEliminacion(){

        fetch(`${endpoint}/eliminar/${registroAEliminar[idField]}`,{
            method:"DELETE" //metodo para eliminar registro
        })
        .then(()=>{

            setAlerta({
                mensaje:"Registro eliminado correctamente",
                tipo:"success"
            })

            cargar() //recarga la tabla
            setConfirmarEliminar(false) //cierra el modal
            setRegistroAEliminar(null) //limpia el registro

        })
        .catch(()=>{

            setAlerta({
                mensaje:"Error al eliminar registro",
                tipo:"error"
            })

        })

    }

    return(

        <div>

            <h1 className="text-4xl font-extrabold text-yellow-400 mb-8">
            {titulo} 
            </h1>
            {/*titulo dinamico que recibe el componente*/}

            <button
            onClick={()=>setModalAbierto(true)} 
            //abre modal para agregar registro
            className="mb-6 px-5 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400"
            >
            + Agregar
            </button>

            <Tabla
            columnas={columnas} //columnas de la tabla
            datos={datos} //datos que se mostraran
            onEditar={editar} //funcion editar
            onEliminar={eliminar} //funcion eliminar
            />


            {modalAbierto && (
            //si modalabierto es veradad se muestra el modal

                <Modal
                    titulo={form[idField] ? "Editar registro" : "Nuevo registro"}
                    cerrar={()=>setModalAbierto(false)}
                    >

                    {renderInputs(form,setForm)} 
                    {/*inputs dinamicos del formulario*/}

                    <button
                    onClick={guardar} 
                    //guarda el registro
                    className="w-full bg-yellow-500 text-black py-2 rounded font-bold hover:bg-yellow-400"
                    >
                    Guardar
                    </button>

                </Modal>

            )}


            {confirmarEliminar && (
            //modal de confirmacion para eliminar

                <Modal
                    titulo="Confirmar eliminación"
                    cerrar={()=>setConfirmarEliminar(false)}
                    >

                    <p className="text-white mb-4 text-center">
                    ¿Seguro que quieres eliminar este registro?
                    </p>

                    <div className="flex gap-4">

                        <button
                        onClick={()=>setConfirmarEliminar(false)}
                        className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-400"
                        >
                        Cancelar
                        </button>

                        <button
                        onClick={confirmarEliminacion}
                        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500"
                        >
                        Eliminar
                        </button>

                    </div>

                </Modal>

            )}

            {alerta && (
                <Alert
                mensaje={alerta.mensaje} //mensaje de alerta
                tipo={alerta.tipo} //tipo success o error
                onClose={()=>setAlerta(null)} //cierra alerta
                />
            )}

        </div>

    )

}

export default CRUD //exporta el componente
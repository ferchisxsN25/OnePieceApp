function Tabla({ columnas, datos, onEditar, onEliminar }) { //componente tabla, recibe columnas, datos y funciones para editar o eliminar

return(

    <div className="overflow-x-auto animate-fade-in">
    {/*contenedor de la tablam, con scroll horizontal si la tabla es muy grandey animacion al aparecer */}

        <table className="min-w-full bg-black/50 backdrop-blur-md text-white rounded-lg overflow-hidden shadow-2xl">
        {/*tabla principal, */}

            <thead className="bg-white/10 text-yellow-300 text-lg">{/*encabezado de la tabla */}
                <tr>
                    {/*recorre el arreglo de columnas y crea cada encabezado si no se hace el map las columnas tendrian que escribirse manualmente */}
                    {columnas.map((columna, index) => (  
                    <th key={index} className="px-4 py-3 text-left">
                    {columna}
                    </th>
                    ))}

                    <th className="px-4 py-3 text-center">
                    Acciones
                    </th>
                    {/*columna extra para botones de editar y eliminar */}
                    
                </tr>

            </thead>

            <tbody>

                {datos.map((fila, index) => (
                //recorre los datos y crea una fila por cada registro

                <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/10 transition"
                    >
                    {/*recorre cada campo del registro
                    filter evita mostrar los id*/}
                    {Object.entries(fila)
                    .filter(([key]) => !key.startsWith("id"))
                    .map(([key, valor], i) => (
                    <td key={i} className="px-4 py-2">
                    {valor}
                    </td>
                    ))}

                    <td className="px-4 py-2 flex gap-2 justify-center">
                    {/*celda para botones de acciones */}

                        <button
                        onClick={() => onEditar && onEditar(fila)}
                        className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-400"
                        >
                        Editar
                        </button>
                        {/*boton editar
                        llama la funcion oneditar si existe */}
                        
                        {/*boton eliminar llama la funcion oneliminar */}
                        <button
                        onClick={() => onEliminar && onEliminar(fila)} 
                        className="bg-red-500 px-3 py-1 rounded hover:bg-red-400"
                        >
                        Eliminar
                        </button>
                    </td>
                </tr>

                ))}

            </tbody>

        </table>

    </div>

    )

}

export default Tabla //exporta el componente 
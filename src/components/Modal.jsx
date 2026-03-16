function Modal({ titulo, children, cerrar }) { 
//componente modal, recibe titulo, contenido interno y funcion para cerrar

    return(

        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"> {/*fondo oscuro para que cubra toda la pantalla */}
            <div className="bg-black/80 backdrop-blur-md border border-yellow-500/30 p-8 rounded-xl shadow-2xl w-[400px] text-white animate-fade-in">
            {/*caja principal del modal con efecto, padding, bordes, anchos y demás*/}

                <h2 className="text-2xl font-bold text-yellow-400 mb-4"> {/*muestra el titulo que se manda al componente */}
                {titulo}
                </h2>

                <div className="mb-6">  {/*children permite poner cualquier contenido dentro como inputs, texto o botones */}
                {children}
                </div>
                <div className="flex justify-end">{/*contenedor para el boton */}
                    <button
                        onClick={cerrar} //ejecuta la funcion cerrar cuando se presiona
                        className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-400 transition"
                        >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>

    )

}

export default Modal //exporta
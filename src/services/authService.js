const API = import.meta.env.VITE_API_URL

// para el inicio
export async function login(usuario, password){

    try{

        const res = await fetch(`${API}/crud/obtener`) // tienen que ser kas mismas rutas de la API
        const data = await res.json()

        const user = data.find(
            u => u.nombre === usuario && u.contra === password  // u usuario
        )

        if(user){
            return { success:true, user }
        }else{
            return { success:false }
        }

    }catch(error){
        console.error("Error al iniciar:", error)  // manejo de errores
        return { success:false }
    }

}

// para el registro
export async function register(usuario, password){

    try{

        const res = await fetch(`${API}/crud/insertar`,{  
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                nombre: usuario,
                contra: password
            })
        })

        console.log("ESTADO:", res.status)

        const data = await res.text()
        console.log("RESPUESTA:", data)

        if(res.status === 200){
            return true
        }else{
            return false
        }

    }catch(error){
        console.error("Error registro:", error)
        return false
    }

}
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient' 
import Navegacion from '../components/Navegacion'
import Favorites from '../components/Favorites'
import Player from '../components/Player'
import Full from '../assets/full.png'
import Perfil from '../assets/perfil.png'
function Principal() {
  const [user, setUser] = useState(null) //user es el estado donde guardas la información del usuario (o null si no hay).
  const navigate = useNavigate() //navigate se usa luego para enviar al usuario a otra ruta (/reini en tu caso).

  useEffect(() => {
    
    const getSession = async () => { 
      const { data } = await supabase.auth.getSession()
      setUser(data.session?.user ?? null)
    }
    getSession() // Con esto, si el usuario ya estaba logueado (por ejemplo al refrescar), user quedará con el objeto del usuario.

    
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => sub.subscription.unsubscribe()
  }, [])  

  const logout = async () => { logout //cierra sesión en Supabase, limpia el estado local y redirige a la ruta
    await supabase.auth.signOut()
    setUser(null)
    navigate('/reini')
  }

  return (
    <div className="container-inicial">
      <div className="espacio"></div>
      
      <nav className='cabeza' > 
        {user ? ( //Si user existe (usuario logueado) renderiza: todos .os elementos dentro
          <>
          <div className='full' > < img src={Full} alt=""  /> </div>
          <div className='perfil-container'  > <div  > < img  className='perfil' src={Perfil} alt=""  /> </div> <div><b className="email">{user.email}</b></div> </div>
            <button className="btn-cerrarsesion" onClick={logout}>
             <b> Cerrar Sesión</b>
            </button>
          </>
        ) : (
            <Link to={'/Reini'} >  Iniciar Sesion o Registrate  </Link>
            

        )}
      </nav>

      <main>
              <Player user={user} />
             
              <br /><br /> <br />  <br />
                <Navegacion></Navegacion>
                

      </main>

      <footer>  
       
      </footer>

      
    </div>
  )
}

export default Principal

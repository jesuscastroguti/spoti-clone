import React, { useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [message, setMessage] = useState('')
const navigate = useNavigate()


const handleLogin = async (e) => {
e.preventDefault()
setMessage('')
const { data, error } = await supabase.auth.signInWithPassword({ email, password })
if (error) setMessage(error.message)
else {
setMessage('Inicio de sesión correcto')
navigate('/principal')
}
}


return (
<form className="form" onSubmit={handleLogin}>

    
<label>Correo Electronico </label>
<input value={email} onChange={(e) => setEmail(e.target.value)} required />

  
<label>Contraseña</label>
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

<br />
<button className="btn-registrate" type="submit"><b> Iniciar Sesion</b></button>



{message &&  <p className="msg">  { message}</p>} 

<br />
<b className="msg" >  No tienes cuenta?   <Link to={'/Registrosesion'} >Registrate</Link>   </b> 


</form>
)
}

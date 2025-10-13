import React, { useState } from 'react'
import { supabase } from '../supabaseClient'
import { Link } from 'react-router-dom'


export default function Register() {
 
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [message, setMessage] = useState('')
const [errorMessage, setErrorMessage] = useState('') 


const handleRegister = async (e) => {
e.preventDefault()
setMessage('')
setErrorMessage('')

const { data, error } = await supabase.auth.signUp({ email, password }) 


if (error) setMessage(error.message)
else setMessage('Registro exitoso Inicia Sesion ')

}



 
return (
    
<form className="form" onSubmit={handleRegister}>
 {message && <h2 className="msg"> { message}</h2>}
   <br />
<label>¿Cual es tu correo electronico?</label>
<input value={email} onChange={(e) => setEmail(e.target.value)} required />


<label>Crear una contraseña</label>
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />


  <button className='btn-registrate2'type="submit"  > <b>Registrate </b></button> 
 



 <Link to={'/Iniciosesion'} > <b className="msg" >Ya tienes cuenta ? </b> Iniciar Sesion</Link>   
</form>



)
}
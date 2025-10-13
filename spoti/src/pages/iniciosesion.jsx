import React from 'react'
import Small from '../assets/small.png'
import Login from '../components/Login'
function iniciosesion() {
  return (
   <div className='container-inicial' >
    <div  className='espacio' ></div>
     <div className='spotify-small' > < img src={Small} alt=""  /> </div>
       <div className='texto-reini' > <h1>Inicia sesion en Spotify</h1> </div>
       <br />
       <Login></Login>

       
       
    </div>
  )
}

export default iniciosesion

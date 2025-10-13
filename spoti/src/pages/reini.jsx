import React from 'react'
import { Link } from 'react-router-dom'
import Small from '../assets/small.png'
function reini() {
  return (
    <div  className='container-inicial' >
       <div className='espacio' ></div>

        <div className='spotify-small' > < img src={Small} alt=""  /> </div>
            {<br></br>}
           <div className='texto-reini' > <h1>Millones de canciones <br /> Gratis en Spotify</h1> </div>
          
          <div  className='contendor-link' >
          <Link to={'/Registrosesion'} > <button className='btn-registrate' > <b>Registrate </b></button> </Link>
          <br /> <br />
           
             <Link to={'/Iniciosesion'} > <button className='btn-iniciarsesion' > <b>Iniciar Sesion </b></button> </Link>

           </div>
    </div>
  )
}

export default reini

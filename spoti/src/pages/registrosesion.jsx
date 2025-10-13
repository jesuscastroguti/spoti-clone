import React from 'react'
import Small from '../assets/small.png'
import Register from '../components/Register'
function registrosesion() {
  return (
    <div className='container-inicial' >
    <div  className='espacio' ></div>
        <div className='spotify-small' > < img src={Small} alt=""  /> </div>
         {<br></br>}
           <div className='texto-reini' > <h1>Registrate para <br /> empezar a escuchar <br />contenido</h1> </div>
               
             <Register></Register>



         
           
    </div>
  )
}

export default registrosesion

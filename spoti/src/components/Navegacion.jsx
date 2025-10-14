import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../assets/icon-home.png'
import Lupa from '../assets/icon-lupa.png'
import Biblioteca from '../assets/icon-biblioteca.png'
function Navegacion() {
  return (
    <div className='container-navegacion' >
        <div className='img-navegacion' >
    <Link to={'/principal'} > <div className='home' > < img   src={Home} alt=""  /> </div> </Link>
      <div><p className='text-navegacion' >Home</p></div>
      </div>
      <div className='img-navegacion' >
      <div className='lupa' > < img  src={Lupa} alt=""  /> </div>
      <div><div><p className='text-navegacion' >Buscar</p></div></div>
      </div>
      <div className='img-navegacion' >
     <Link to={'/Biblioteca'} ><div className='biblioteca' > < img  src={Biblioteca} alt=""  /> </div> </Link>
     <div><div><p className='text-navegacion' >Biblioteca</p></div></div>
      </div>
    </div>
  )
}

export default Navegacion

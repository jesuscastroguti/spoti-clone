import React from 'react'
import Spotifyicon from '../assets/spotify-icon.png'
import { Link } from 'react-router-dom'
function inicial() {
  return (
    
        <div  className='container-inicial' >
             <div className='espacio' ></div>
           <Link to={'/Reini'} > <div className='spotify-grande' > < img src={Spotifyicon} alt=""  /> </div></Link> 
        </div>
     
   
  )
}

export default inicial

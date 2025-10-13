import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicial from './pages/inicial'
import Biblioteca from './pages/Biblioteca'
import Rei_ni from './pages/reini'
import Registrosesion from './pages/registrosesion'
import Iniciosesion from './pages/iniciosesion'
import  Principal from './pages/principal'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Routes>
        <Route path ='/' element={<Inicial/>}></Route>
        <Route path ='/Reini' element={<Rei_ni/>}> </Route>
        <Route path ='/Registrosesion' element={<Registrosesion/>}> </Route>
         <Route path ='/Iniciosesion' element={<Iniciosesion/>}> </Route>
         <Route path ='/principal' element={<Principal/>}> </Route>
          <Route path ='/Biblioteca' element={<Biblioteca/>}> </Route>
      </Routes>
    </>
  )
}

export default App

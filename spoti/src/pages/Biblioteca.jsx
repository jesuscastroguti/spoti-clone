import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Favorites from "../components/Favorites";
import Atras from '../assets/atras.png'
import Navegacion from "../components/Navegacion";
import { Link, useNavigate } from 'react-router-dom'

function Biblioteca() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    }; 
    getSession(); 
  }, []);
     
  return (
    <div className="container-inicial">
      <div className="espacio"></div>
      <a href="/principal"> <div className="atras" > < img src={Atras} alt=""  /> </div></a>

      {user ? (
        <Favorites user={user} />
      ) : (
        <p style={{ color: "white" }}>Inicia sesión para ver tu biblioteca</p>
      )}

      <br />
      <br />
      <br />
      <br />
      <Navegacion />
    </div>
  );
}

export default Biblioteca;

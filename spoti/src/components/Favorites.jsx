import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Favorites({ user }) {
  const [favorites, setFavorites] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentTrackId, setCurrentTrackId] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchFavorites = async () => {
      const { data, error } = await supabase
        .from("favorites")
        .select("*")
        .eq("user_id", user.id);

      if (!error) setFavorites(data || []);
      else console.error(error);
    };

    fetchFavorites();
  }, [user]);

  if (!user) {
    return <p>Inicia sesión para ver tus favoritos</p>;
  }

  const handlePlayPause = (track) => {
    if (currentTrackId === track.track_id) {
      currentAudio.pause();
      setCurrentAudio(null);
      setCurrentTrackId(null);
    } else {
      if (currentAudio) {
        currentAudio.pause();
      }
      const newAudio = new Audio(track.preview);
      newAudio.play();
      newAudio.onended = () => {
        setCurrentAudio(null);
        setCurrentTrackId(null);
      };
      setCurrentAudio(newAudio);
      setCurrentTrackId(track.track_id);
    }
  };

  return (
    <div className="player-root">
      <h2 className="text-topmusic">Biblioteca...</h2>

      <div className="contenedor-tracks">
        {favorites.length === 0 ? (
          <p style={{ color: "white" }}> 🎵 No tienes canciones guardadas aún 🎵</p>
        ) : (
          favorites.map((f) => (
            <div key={f.id} className="track">
              <img src={f.album_cover} alt={f.title} className="album-cover" />
              <div>
                <strong>{f.title}</strong>
                <div className="artist">{f.artist}</div>
              </div>

              <button className="play-button" onClick={() => handlePlayPause(f)}>
                {currentTrackId === f.track_id ? "⏸" : "▶"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
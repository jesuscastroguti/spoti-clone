import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Player({ user }) {
  const [tracks, setTracks] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchTracks();
    fetchFavorites();
  }, [user]);

  const fetchTracks = async () => {
    try {
      const res = await fetch(
        "https://corsproxy.io/?https://itunes.apple.com/search?term=reggaeton&entity=musicTrack&limit=200"
      );
      const data = await res.json();
      setTracks(
        data.results.map((item) => ({
          id: item.trackId.toString(),
          title: item.trackName,
          artist: { name: item.artistName },
          preview: item.previewUrl,
          albumCover: item.artworkUrl100,
        }))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const fetchFavorites = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from("favorites")
      .select("track_id")
      .eq("user_id", user.id);
    if (!error) setFavorites(data.map((f) => f.track_id));
  };

  const handlePlayPause = (track) => {
    if (currentTrackId === track.id) {
      currentAudio.pause();
      setCurrentAudio(null);
      setCurrentTrackId(null);
    } else {
      if (currentAudio) currentAudio.pause();
      const newAudio = new Audio(track.preview);
      newAudio.play();
      newAudio.onended = () => {
        setCurrentAudio(null);
        setCurrentTrackId(null);
      };
      setCurrentAudio(newAudio);
      setCurrentTrackId(track.id);
    }
  };

  const toggleFavorite = async (track) => {
    if (!user) {
      alert("Inicia sesión para agregar a la biblioteca");
      return;
    }

    if (favorites.includes(track.id)) {
      // ✅ Eliminar de favoritos
      const { error } = await supabase
        .from("favorites")
        .delete()
        .eq("user_id", user.id)
        .eq("track_id", track.id);
      if (!error) {
        setFavorites(favorites.filter((f) => f !== track.id));
      }
    } else {
      // ✅ Insertar en favoritos
      const { error } = await supabase.from("favorites").insert([
        {
          user_id: user.id,
          track_id: track.id,
          title: track.title,
          artist: track.artist.name,
          album_cover: track.albumCover,
          preview: track.preview,
        },
      ]);

      if (!error) {
        setFavorites([...favorites, track.id]);
      }
    }
  };

  return (
    <div className="player-root">
      <h2 className="text-topmusic">Top Music...</h2>

      <div className="contenedor-tracks">
        {tracks.map((t) => (
          <div key={t.id} className="track">
            <img src={t.albumCover} alt="" className="album-cover" />

            <div>
              <strong>{t.title}</strong>
              <div className="artist">{t.artist?.name}</div>
            </div>

            <div className="controls">
              <button className="btn" onClick={() => handlePlayPause(t)}>
                {currentTrackId === t.id ? "⏸" : "▶"}
              </button>

              <button
                className="btn-heart"
                onClick={() => toggleFavorite(t)}
                style={{
                  color: favorites.includes(t.id) ? "green" : "black",
                  fontSize: "15px",
                  marginLeft: "5px",
                }}
              >
                {favorites.includes(t.id) ? "−" : "+"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React, { useEffect } from "react";
export default function Spotify() {
  const token = "Bearer ";
  useEffect(() => {
    try {
      fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Authorization: token,
        },
      });
      if (res) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <div>Spotify</div>;
}

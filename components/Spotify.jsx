import React, { useEffect } from "react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const key = publicRuntimeConfig.SECRET;
export default function Spotify() {
  // useEffect(() => {
  //   try {
  //     const res = fetch(
  //       "https://api.spotify.com/v1/playlists/6jLe3oKRrgV4cTnb0ZUPSC?si=d149731c88584ce3",
  //       {
  //         headers: {
  //           Authorization: `Bearer `,
  //         },
  //       }
  //     );
  //     if (res) {
  //       console.log(res);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  return <div>Spotify</div>;
}

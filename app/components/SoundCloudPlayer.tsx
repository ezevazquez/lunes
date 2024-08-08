import React from "react";

const SoundCloudPlayer = () => {
  return (
    <div>
      <h1>Escucha la canción de los lunes 🎵</h1>

      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1892274261&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
  );
};

export default SoundCloudPlayer;

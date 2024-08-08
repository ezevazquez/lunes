// components/Player.tsx
import styles from '../styles/Player.module.css';

const Player = () => {
  return (
    <div className={styles.container}>
      <h1>La canción de los lunes 🎵</h1>
      <audio controls className={styles.audioPlayer}>
        <source src="/audio/Renuncio.mp3"/>
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
};

export default Player;

// app/layout.tsx
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Canción de los Lunes',
  description: 'Los lunes se renuncia :telegrama:',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Meta Tags de Open Graph para Slack */}
        <meta property="og:type" content="music.song" />
        <meta property="og:title" content="Canción de los Lunes 🎵" />
        <meta property="og:description" content="Los lunes se renuncia :telegrama:" />
        <meta property="og:url" content="https://lunes.probandocosas.com" />
        <meta property="og:image" content="https://lunes.probandocosas.com/thumbnail.jpg" />
        <meta property="og:audio" content="https://lunes.probandocosas.com/audio/Renuncio.mp3" />
        <meta property="og:audio:type" content="audio/mp3" />
      </Head>
      <body>{children}</body>
    </html>
  );
}

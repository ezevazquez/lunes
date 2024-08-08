// app/layout.tsx
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Renuncio hoy',
  description: 'Los lunes son de renuncia',
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
      </Head>
      <body>{children}</body>
    </html>
  );
}

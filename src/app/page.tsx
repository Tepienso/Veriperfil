import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Bienvenido a Veriperfil</h1>
      <p>Haz clic en el enlace para ir a un perfil de prueba:</p>
      <Link href="/perfil/12345">
        Ir al perfil de prueba (ID: 12345)
      </Link>
    </div>
  );
}

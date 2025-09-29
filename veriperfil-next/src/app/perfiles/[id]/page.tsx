interface PageProps {
  params: { id: string };
}

export default function Perfil({ params }: PageProps) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Perfil dinámico</h1>
      <p>Mostrando información del perfil con ID: <strong>{params.id}</strong></p>
      <p>Este es un perfil de prueba generado dinámicamente.</p>
    </div>
  );
}


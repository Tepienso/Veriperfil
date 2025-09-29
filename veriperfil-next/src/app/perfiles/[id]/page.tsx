// ✅ Versión simplificada y compatible con Next.js 15
export default function Perfil({ params }: { params: { id: string } }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Perfil dinámico</h1>
      <p>
        Mostrando información del perfil con ID:{" "}
        <strong>{params.id}</strong>
      </p>
      <p>Este es un perfil de prueba generado dinámicamente.</p>
    </div>
  );
}



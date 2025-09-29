export default function Perfil({ params }: unknown) {
  // Evitamos tipar la firma del componente para no chocar con PageProps.
  // Tipamos SOLO el uso interno con una aserción segura.
  const { id } = (params as { id: string });

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Perfil dinámico</h1>
      <p>
        Mostrando información del perfil con ID:{" "}
        <strong>{id}</strong>
      </p>
      <p>Este es un perfil de prueba generado dinámicamente.</p>
    </div>
  );
}







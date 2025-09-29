export default function Cliente(props: unknown) {
  const { id } = (props as { params: { id: string } }).params;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Cliente dinámico</h1>
      <p>
        Mostrando información del cliente con ID:{" "}
        <strong>{id}</strong>
      </p>
      <p>Este es un cliente de prueba generado dinámicamente.</p>
    </div>
  );
}

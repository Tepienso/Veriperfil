// Mock de clientes dinámico
const clientes: Record<string, { nombre: string; email: string }> = {
  "12345": { nombre: "Juan Pérez", email: "juan@example.com" },
  "67890": { nombre: "Ana Gómez", email: "ana@example.com" },
};

export const dynamicParams = true;

export default function Cliente({ params }: { params: { id: string } }) {
  const { id } = params;
  const cliente = clientes[id] ?? { nombre: "Desconocido", email: "-" };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Cliente dinámico</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Nombre:</strong> {cliente.nombre}</p>
      <p><strong>Email:</strong> {cliente.email}</p>
    </div>
  );
}


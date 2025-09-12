import QRPerfil from "@/components/QRPerfil";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PerfilPage({ params }: PageProps) {
  const { id } = await params;
  return (
    <div>
      <h1>Perfil {id}</h1>
      <QRPerfil id={id} />
    </div>
  );
}

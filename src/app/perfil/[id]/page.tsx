import React from "react";
import QRPerfil from "@/components/QRPerfil";

export default function PerfilPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Perfil {params.id}</h1>
      <QRPerfil id={params.id} />
    </div>
  );
}

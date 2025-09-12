import React from "react";
import QRPerfil from "@/components/QRPerfil";

type PerfilPageProps = {
  params: {
    id: string;
  };
};

export default function PerfilPage({ params }: PerfilPageProps) {
  return (
    <div>
      <h1>Perfil {params.id}</h1>
      <QRPerfil id={params.id} />
    </div>
  );
}


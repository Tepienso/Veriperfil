"use client";
import { QRCodeCanvas } from "qrcode.react";

/**
 * Componente QRPerfil
 * Genera un código QR que apunta a la URL del perfil según el entorno.
 * - En desarrollo: http://localhost:3000/perfil/{id}
 * - En producción: valor definido en NEXT_PUBLIC_BASE_URL
 */
export default function QRPerfil({ id }) {
  // Base URL configurable por variable de entorno
  console.log("Valor de NEXT_PUBLIC_BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // URL final del perfil
  const url = `${baseUrl}/perfil/${id}`;

  return (
    <div style={{ textAlign: "center" }}>
      <QRCodeCanvas
        value={url}
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        includeMargin={true}
      />
      <p style={{ marginTop: "10px" }}>{url}</p>
    </div>
  );
}

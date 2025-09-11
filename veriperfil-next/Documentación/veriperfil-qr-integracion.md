# 📄 Integración del módulo QR en Veriperfil

## 🧩 Definición
Este protocolo documenta la integración del componente `QRPerfil.jsx` en la vista `/perfil/[id]` del proyecto Veriperfil.  
El objetivo es que cada perfil renderice su propio código QR escaneable, apuntando a la URL dinámica correspondiente.

---

## 🎯 Objetivo técnico
- Mostrar el QR en la misma vista que el perfil
- Usar el parámetro `id` para generar la URL dinámica
- Validar funcionamiento en entorno local y red interna
---

## 🛠 Componentes involucrados

| Archivo                      | Rol en el flujo QR                         |
|------------------------------|--------------------------------------------|
| `QRPerfil.jsx`               | Componente que genera el código QR         |
| `page.jsx` (`/perfil/[id]`)  | Vista que recibe el parámetro dinámico     |
| `.env.local`                 | Define la URL base según el entorno        |

---

## 🧬 Código de integración

```tsx
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
Este código asegura que el componente QR reciba el id dinámico y genere la URL correspondiente.
---

## ✅ Validación en entorno local

- Ejecutar el proyecto con `npm run dev`
- Navegar a `http://localhost:3000/perfil/{id}`
- Confirmar que:
  - Se muestra el título `Perfil {id}`
  - El componente QR se renderiza correctamente
  - El QR apunta a `http://192.168.100.7:3000/perfil/{id}` (según `.env.local`)
  - El QR puede ser escaneado desde celular conectado a la misma red

---

## 📌 Observaciones clave

- El componente `QRPerfil.jsx` debe recibir correctamente el `id` desde `params`
- La variable `NEXT_PUBLIC_BASE_URL` debe estar definida en `.env.local` y el proyecto debe ser reconstruido para que se aplique
- Si el QR apunta a `localhost`, revisar ubicación del `.env.local` y ejecutar `npm run build` nuevamente
- Para producción, se deberá usar:
NEXT_PUBLIC_BASE_URL=https://veriperfil.com

---

## ✅ Checkpoint registrado

**Integración QR en vista de perfil: validada**
Con esto, el protocolo queda completo, trazable y listo para futuras iteraciones.

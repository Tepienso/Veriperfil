# 🧠 Glosario técnico — Punto QR (Next.js)

## 🧩 Definición
**Punto QR**: Flujo técnico para generar un código QR dinámico que apunte a la URL del perfil en Veriperfil, adaptándose automáticamente al entorno (local, red interna o producción), usando variables de entorno y rutas dinámicas.

---

## 🛠 Componentes involucrados

| Archivo            | Rol en el flujo QR                         |
|--------------------|--------------------------------------------|
| `QRPerfil.jsx`     | Componente que genera el código QR         |
| `.env.local`       | Define la URL base según el entorno        |
| `package.json`     | Punto de entrada para scripts de build     |
| `/perfil/[id]`     | Ruta dinámica que recibe el parámetro `id` |
---

## ✅ Protocolo paso a paso

### 🔧 Preparación
- Crear `.env.local` en la raíz del proyecto (junto a `package.json`)
- Definir la variable:
    NEXT_PUBLIC_BASE_URL=http://192.168.100.7:3000
    
### 🧠 Componente QR
- Usar la variable en `QRPerfil.jsx`:
```js
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const url = `${baseUrl}/perfil/${id}`;
---

### 🧹 Limpieza y build

- Borrar carpetas y archivos cacheados:
  ```bash
  rmdir /s /q .next
  rmdir /s /q node_modules
  del package-lock.json
·Reinstalar dependencias:
    npm install
·Compilar y levantar servidor:
  npm run build
  npm start
---

### 📱 Prueba en red local

- Escanear QR desde celular conectado a la misma red
- Confirmar que la URL generada es:
  http://192.168.100.7:3000/perfil/{id}
  - Verificar que la página carga correctamente en navegador de escritorio
- Optimizar acceso desde celular (pendiente por firewall/red)
---

## 📌 Observaciones clave

- `.env.local` debe estar en la raíz, no dentro de `.next` ni `src/`.
- Variables `NEXT_PUBLIC_` se inyectan en el cliente solo en tiempo de build.
- Para producción, usar:
NEXT_PUBLIC_BASE_URL=https://veriperfil.com
- Si el QR sigue mostrando `localhost`, revisar ubicación del `.env.local` y reconstruir.

---

## 🧠 Palabra clave

**Punto QR** — para retomar este flujo rápidamente en futuras sesiones.

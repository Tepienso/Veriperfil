# 06 - Flujo de Validación QR

Este documento describe el proceso completo de validación de un perfil mediante código QR en **Veriperfil**, desde la generación hasta la confirmación final, incluyendo puntos de control, manejo de errores y referencias cruzadas para trazabilidad.

---

## 1. Descripción general

El flujo de validación QR permite verificar la autenticidad de un perfil escaneando un código único que enlaza a un endpoint seguro de la API.  
Este proceso es clave para garantizar la **integridad de la información** y la **confianza del usuario**.

---

## 2. Actores involucrados

- **Usuario solicitante**: Persona que presenta el QR para validar su perfil.
- **Sistema Veriperfil**: Genera, almacena y valida el QR.
- **Validador**: Persona o sistema que escanea el QR y confirma la validez.

---

## 3. Flujo paso a paso

1. **Generación del QR**  
   - Se crea un código QR único asociado al `id` del perfil.
   - El QR contiene una URL con un token seguro (ejemplo: `https://veriperfil.com/v/{id}`).
   - El token se guarda en la base de datos con estado `pendiente`.

2. **Entrega del QR**  
   - El QR se muestra en la interfaz del usuario o se envía por un canal seguro.
   - El usuario lo presenta para validación.

3. **Escaneo del QR**  
   - El validador escanea el código con un lector compatible.
   - El lector abre la URL contenida en el QR.

4. **Validación en backend**  
   - El endpoint `/api/v/[id]` recibe el identificador.
   - Se verifica:
     - Que el ID exista.
     - Que no esté expirado.
     - Que no haya sido usado previamente (si aplica).
   - Si es válido, se actualiza el estado a `validado`.

5. **Respuesta al validador**  
   - **Éxito**: Se muestra un mensaje de confirmación con datos básicos del perfil.
   - **Error**: Se informa el motivo (ID inválido, expirado o ya usado).

---

## 4. Variables de entorno

- `NEXT_PUBLIC_BASE_URL` → URL base del proyecto.
- `DATABASE_URL` → conexión a la base de datos.
- `QR_SECRET` (opcional) → clave para firmar/verificar IDs o tokens.

---

## 5. Manejo de errores y seguridad

- **Expiración**: Los tokens tienen un tiempo de vida limitado (ej. 24h).
- **Uso único**: Un token validado no puede reutilizarse.
- **Protección contra fuerza bruta**: Límite de intentos por IP.
- **Registro de auditoría**: Cada validación se guarda con fecha, hora y origen.
- **HTTPS obligatorio**: Todas las URLs deben usar protocolo seguro.

---

## 6. Diagrama de flujo

```mermaid
flowchart TD
    A[Usuario solicita QR] --> B[Generar token + QR]
    B --> C[Guardar en DB: estado pendiente]
    C --> D[Usuario presenta QR]
    D --> E[Validador escanea QR]
    E --> F[API recibe token/ID]
    F -->|No válido| G[Mostrar error]
    F -->|Válido| H[Actualizar estado a validado]
    H --> I[Mostrar confirmación]

---

## 7. Buenas prácticas

- Mantener `main` estable y probar cambios en entornos de *preview* antes de desplegar a producción.
- Regenerar el QR si el perfil cambia de estado o si el token expira.
- Documentar cualquier cambio en `.env.example` y en `docs/` para mantener la trazabilidad.
- Mantener logs de accesos y validaciones para auditoría.
- Revisar periódicamente las reglas de seguridad y los límites de intentos para prevenir abusos.

---

## 8. Referencias cruzadas

- [03-Estructura-de-proyecto.md](03-Estructura-de-proyecto.md) — ubicación de endpoints y carpetas relevantes.  
- [10-endpoints-api.md](10-endpoints-api.md) — definición del endpoint `/api/v/[id]`.  
- [04-flujo-de-ramas.md](04-flujo-de-ramas.md) — estrategia de ramas para implementar cambios en este flujo.

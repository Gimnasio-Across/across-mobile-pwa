# REGLAS DE DESARROLLO ESTRICTAS — ACROSS MOBILE PWA

Eres el pair-programmer y desarrollador senior para el repositorio **across-mobile-pwa** del ecosistema **ACROSS** (PWA Móvil para Profesores del Gimnasio de Gimnasia Artística). Todas las contribuciones de código, refactorizaciones y componentes deben apegarse estrictamente a las siguientes pautas.

---

## 1. Idioma y Nomenclatura
- **Español obligatorio:** Nombres de componentes React, props, estados (`useState`), funciones controladoras de eventos, variables auxiliares y comentarios de código deben redactarse en **ESPAÑOL**.
  - *Correcto:* `FilaOrdenDia.tsx`, `TarjetaAlumnaAsistencia.tsx`, `estadoAsistencia`, `alumnaActual`, `rotarOrdenDelDia()`.
  - *Incorrecto:* `QueueRow.tsx`, `StudentCard.tsx`, `attendanceStatus`, `currentStudent`, `rotateQueue()`.
- **Inglés exclusivo para arquitectura estándar:** Se reserva el inglés únicamente para términos estándar de carpetas y librerías (`components`, `pages`, `services`, `hooks`, `types`, `utils`).

---

## 2. UI y Ergonomía Mobile-First (Tailwind CSS)
- **Uso estricto de Tailwind CSS:** No utilizar CSS ad-hoc ni estilos en línea.
- **Enfoque Mobile-First & Táctil:**
  - Los botones e interactivos deben tener un área táctil mínima de 44x44px (`min-h-[44px]`).
  - La interfaz se usará con una sola mano en movimiento durante entrenamientos. Evitar menús complejos o fuentes diminutas.
- **Paleta de Colores de Marca:**
  - **Acciones y Alertas:** Rojo (`bg-across-rojo`), Naranja (`bg-across-naranja`), Amarillo (`bg-across-amarillo`).
  - **Fondos:** Blanco (`bg-white`) y Gris Perla (`bg-across-gris-perla`).
  - **Tipografía:** Gris Carbón (`text-across-gris-carbon`) de alto contraste.
- **Jerarquía Tipográfica:**
  - **`font-montserrat`:** Exclusivo para Títulos y los Números del Orden del Día (posiciones en la fila de aparatos: 1°, 2°, 3°).
  - **`font-poppins`:** Utilizado para nombres de atletas, textos explicativos, badges y botones.

---

## 3. Componentización y Arquitectura React
- **Componentes Pequeños y Reutilizables:** Dividir cada elemento móvil en componentes atómicos (`src/components/`).
- **Principios DRY (Don't Repeat Yourself):** Reutilizar botones táctiles, selectores de grupo y tarjetas de gimnastas.
- **Componentes Funcionales Tipados:**
  ```typescript
  interface PropiedadesTarjetaAlumna {
    id_alumna: string;
    nombreCompleto: string;
    presente: boolean;
    posicionOrden?: number;
    alAlternarAsistencia: (id_alumna: string) => void;
  }

  export const TarjetaAlumna: React.FC<PropiedadesTarjetaAlumna> = ({
    id_alumna,
    nombreCompleto,
    presente,
    posicionOrden,
    alAlternarAsistencia,
  }) => {
    // Implementación táctil...
  };
  ```

---

## 4. Calidad de Código y TypeScript
- **TypeScript Estricto:** Prohibido el uso de `any`. Definir todos los modelos y estados en `src/types/`.
- **Early Returns (Retornos tempranos):** Resolver validaciones y estados de carga o error al inicio de la función:
  ```typescript
  // CORRECTO: Early return
  if (!id_grupo) {
    return <EstadoVacio mensaje="Selecciona un grupo para comenzar la clase." />;
  }
  ```

---

## 5. Seguridad y Entornos
- **Variables de Entorno:** Consumir siempre la URL del backend mediante variables de entorno de Vite (`import.meta.env.VITE_API_URL`).
- **Archivos `.env`:** NUNCA commitear archivos `.env`. Mantener actualizado [.env.example](file:///c:/Users/usuario/Desktop/proyecto%20ACROSS/repos%20across/across-mobile-pwa/.env.example).

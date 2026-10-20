# ACROSS Mobile PWA — Aplicación para Profesores 📱🤸

Aplicación Web Progresiva (PWA) con diseño **Mobile-First** optimizada para el uso ágil de entrenadores y profesores durante la clase en el gimnasio de Gimnasia Artística **ACROSS**.

Digitaliza dos procesos fundamentales en la pista:
1. **Toma de Asistencias:** Registro rápido con un toque de presentes y ausentes por grupo y horario.
2. **Sistema "Orden del Día":** Algoritmo y vista en vivo que determina quién pasa primera en la fila de cada aparato (viga, suelo, salto, barras), garantizando rotación justa y dinámica en el entrenamiento.

---

## 🛠️ Stack Tecnológico

- **Framework:** [React 19](https://react.dev/)
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Modo estricto)
- **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Paradigma:** Mobile-First, PWA (instalable en pantalla de inicio de Android/iOS)
- **Tipografías:** Google Fonts (`Montserrat` & `Poppins`)

---

## 🎨 Sistema de Diseño ACROSS (Mobile)

### 1. Tipografías
- **`font-montserrat` (`Montserrat`):** Utilizada para números grandes del **Orden del Día** (1°, 2°, 3° en la fila), métricas y títulos de pantalla.
- **`font-poppins` (`Poppins`):** Utilizada para nombres de gimnastas, botones de acción táctil, badges y estados.

### 2. Paleta de Colores de Marca
Configurada en `tailwind.config.js` bajo el prefijo `across-`:

| Token Tailwind | Tono | Uso en PWA Móvil |
| :--- | :--- | :--- |
| `bg-across-naranja` / `text-across-naranja` | Naranja (`#FB8C00`) | Botones primarios ("Confirmar Asistencia", "Siguiente en la fila"), barra de estado. |
| `bg-across-rojo` / `text-across-rojo` | Rojo (`#E53935`) | Estado Ausente, acciones de cancelación o reseteo. |
| `bg-across-amarillo` / `text-across-amarillo` | Amarillo (`#FDD835`) | Gimnasta actual en turno / llamada de atención / llegada tarde. |
| `bg-across-gris-perla` | Gris Perla (`#F4F5F7`) | Fondo de la aplicación para reducir fatiga visual en la pista. |
| `text-across-gris-carbon` | Gris Carbón (`#212121`) | Texto de alto contraste bajo iluminación de gimnasio. |

---

## 📁 Estructura del Proyecto

```text
across-mobile-pwa/
├── public/                   # Iconos PWA y manifiesto
├── src/
│   ├── assets/               # Gráficos y logos
│   ├── components/           # Componentes táctiles (BotonTactil, TarjetaAlumna, FilaOrden)
│   ├── pages/                # Pantallas móviles (TomaAsistencia, OrdenDelDia, FichaAlumna)
│   ├── services/             # Comunicación con API backend (`across-backend`)
│   ├── types/                # Contratos y tipos TypeScript (Alumna, Asistencia, Orden)
│   ├── utils/                # Utilidades de ordenamiento y cálculo de colas
│   ├── App.tsx               # Enrutador móvil y estados globales
│   ├── index.css             # Directivas Tailwind y estilos táctiles móviles
│   └── main.tsx              # Punto de entrada
├── RULES.md                  # Reglas de desarrollo estrictas para pair-programming
├── index.html                # Plantilla HTML con metaetiquetas PWA y viewport bloqueado
├── package.json              # Dependencias y scripts
├── tailwind.config.js         # Tokens de tipografía y colores
└── vite.config.ts            # Configuración de Vite
```

---

## 🚀 Instalación y Puesta en Marcha Local

### 1. Prerrequisitos
- [Node.js](https://nodejs.org/) (v18 o superior).

### 2. Clonar e Instalar Dependencias
```bash
git clone https://github.com/Gimnasio-Across/across-mobile-pwa.git
cd across-mobile-pwa
npm install
```

### 3. Levantar en Modo Desarrollo
```bash
npm run dev
```
La aplicación abrirá en `http://localhost:5173` (o siguiente puerto disponible). Se recomienda abrir las DevTools en modo emulador de dispositivo móvil (iPhone / Pixel).

### 4. Compilar para Producción
```bash
npm run build
```

---

## 🛡️ Reglas de Desarrollo
Consulta [RULES.md](file:///c:/Users/usuario/Desktop/proyecto%20ACROSS/repos%20across/across-mobile-pwa/RULES.md) para mantener el cumplimiento estricto de nomenclatura en español, tipado estricto sin `any`, diseño táctil mobile-first y retornos tempranos.

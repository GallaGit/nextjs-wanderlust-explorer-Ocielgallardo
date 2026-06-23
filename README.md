# Wonderlust

Explorador de experiencias turisticas construido con **React**, **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**.

Los usuarios pueden explorar 100 experiencias, buscar por titulo, filtrar por categoria y destino, guardar favoritos en sesion y compartir URLs que mantienen el estado de busqueda y filtros.

## Inicio rapido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Rutas

| Ruta | Descripcion |
|------|-------------|
| `/` | Home con hero y CTA hacia el explorador |
| `/experiences` | Listado con busqueda y filtros sincronizados con la URL |
| `/experiences/[id]` | Detalle de una experiencia |
| `/favorites` | Experiencias marcadas como favoritas |
| `/profile` | Perfil simulado con contador de favoritos |

## URLs compartibles

Ejemplos:

```
/experiences?search=vela
/experiences?category=Adventure&destination=Croatia
/experiences?search=vela&category=Adventure&destination=Croatia
```

Al abrir una URL compartida, los inputs se prerrellenan y los resultados coinciden con los filtros activos.

## Estructura del proyecto

```
src/
├── app/
│   ├── page.tsx
│   ├── experiences/page.tsx
│   ├── experiences/[id]/page.tsx
│   ├── favorites/page.tsx
│   └── profile/page.tsx
├── components/
│   ├── layout/Navbar.tsx
│   ├── experiences/
│   └── favorites/FavoritesProvider.tsx
├── data/experiences.ts
├── lib/filterExperiences.ts
└── types/experience.ts
```

## Decisiones tecnicas

- **Filtros en URL:** `search`, `category` y `destination` viven como query params. La pagina `/experiences` los lee en servidor y los componentes client actualizan la URL con `router.push`.
- **Favoritos:** estado global con `useState` en `FavoritesProvider` (sin `localStorage` ni backend).
- **Busqueda:** regex case-insensitive sobre el titulo (`/term/i`), con escape de caracteres especiales.
- **Destino:** el dataset incluye `country` para filtrar por pais (`?destination=Croatia`).

## Design References

### Airbnb

- **Que me gusta:** grid limpio de alojamientos, jerarquia clara entre imagen, titulo, precio y rating, y navegacion simple.
- **Que reutilizo:** tarjetas con imagen dominante, hover sutil y layout responsive en columnas.
- **Inspiracion:** sensacion de catalogo confiable y facil de escanear visualmente.

### GetYourGuide

- **Que me gusta:** enfoque en actividades y experiencias (no solo alojamiento), filtros por tipo de actividad y presentacion orientada a descubrimiento.
- **Que reutilizo:** barra de busqueda + filtros de categoria y destino en la pagina explorador.
- **Inspiracion:** estructura de exploracion por experiencias turisticas con CTA claro hacia el listado.

### TripAdvisor

- **Que me gusta:** ratings visibles y prominentes que transmiten confianza al comparar opciones.
- **Que reutilizo:** valoracion con estrella en cada tarjeta y en la pagina de detalle.
- **Inspiracion:** resaltar la valoracion como senal de calidad en cada experiencia.

## Checklist

- [x] Home con hero y boton a `/experiences`
- [x] 100 experiencias en dataset TypeScript local
- [x] Listado de tarjetas en `/experiences`
- [x] Busqueda por titulo con regex case-insensitive
- [x] Filtros por categoria y destino combinables
- [x] Query params en URL
- [x] Inputs prerrellenados al cargar desde URL
- [x] Detalle en `/experiences/[id]`
- [x] Favoritos con estado superior sin persistencia
- [x] Paginas `/favorites` y `/profile`
- [x] README con design references

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
│   │   ├── ExperiencesExplorer.tsx
│   │   ├── ExperienceDetailActions.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterBar.tsx
│   │   ├── ExperienceGrid.tsx
│   │   ├── ExperienceCard.tsx
│   │   └── FavoriteButton.tsx
│   └── favorites/FavoritesProvider.tsx
├── hooks/
│   └── useFilters.ts
├── data/experiences.ts
├── lib/
│   ├── filterExperiences.ts
│   └── experienceUrl.ts
└── types/experience.ts
```

## Decisiones tecnicas

- **Filtros en URL:** `search`, `category` y `destination` viven como query params. `SearchBar` y `FilterBar` actualizan la URL con `router.push`; `useFilters` lee los params con `useSearchParams()` y sincroniza los resultados filtrados mediante `useEffect`.
- **Custom hook `useFilters`:** encapsula la lectura de query params y el filtrado de experiencias reutilizando `filterExperiences`. Lo consume `ExperiencesExplorer`, un Client Component envuelto en `<Suspense>` desde `experiences/page.tsx`.
- **Favoritos:** `useState` en `FavoritesProvider` (sin `localStorage` ni backend). Los componentes padre (`ExperienceGrid`, `ExperienceDetailActions`) llaman a `useFavorites()` y pasan `isFavorite` y `onToggleFavorite` como props a `ExperienceCard` y `FavoriteButton`.
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

## Brand & Style
- **La personalidad** de la marca es aventurera y sofisticada a la vez, logrando un equilibrio entre la emoción del descubrimiento y la fiabilidad de un servicio premium. Este sistema de diseño adopta un estilo minimalista con toques de vidrio para garantizar que la fotografía de viajes de alta calidad siga siendo el elemento central.

- **La respuesta emocional** debe ser de inspiración y claridad. Mediante el uso de amplios espacios en blanco y una estrategia de capas de interfaz de usuario refinada, la interfaz se integra armoniosamente para que el contenido del destino respire. Las transiciones sutiles y la tipografía de alta gama elevan la experiencia de una simple herramienta a un producto de estilo de vida premium.

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
- [x] Favoritos pasados como props (`isFavorite`, `onToggleFavorite`)
- [x] Custom hook `useFilters` para filtrado sincronizado con query params
- [x] Paginas `/favorites` y `/profile`
- [x] README con design references

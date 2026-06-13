# Café Miranda — Web Oficial

Landing page profesional para Café Miranda, Es Pujols, Formentera.

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion

---

## Inicio rápido

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Verificar antes de publicar
```

---

## Cómo personalizar (sin tocar código)

Todo se configura en **un solo archivo**: `config/cafe-miranda.ts`

### Cambiar horarios

```ts
hours: {
  "Lun – Dom": "08:00 – 23:30",  // Edita aquí
},
hoursNote: "Abierto todos los días. Horario de temporada alta.",
```

### Cambiar teléfono o WhatsApp

```ts
phone: "+34 603 31 98 13",
phoneTel: "+34603319813",          // Sin espacios ni +
whatsapp: "34603319813",           // Sin + ni espacios
```

### Cambiar dirección

```ts
address: "Av. Miramar, 30, 07871 Es Pujols, Illes Balears",
```

### Actualizar reseñas

Edita el array `testimonials` con reviews reales de Google Maps:

```ts
testimonials: [
  {
    name: "Nombre Apellido",
    origin: "Ciudad, País",
    rating: 5,
    text: "Texto de la reseña...",
    avatar: "NA",  // Iniciales
  },
  // ...
],
```

### Cambiar platos del menú showcase

Edita `menuItems` con nombre, descripción, emoji y categoría.

### Activar/desactivar secciones

```ts
sections: {
  showMerch: true,
  showInstagram: true,
  showTestimonials: true,
  showReservas: true,
},
```

---

## Cómo cambiar fotos

Las imágenes están en `public/images/`. Para cada sección:

| Carpeta | Contenido |
|---------|-----------|
| `public/images/menu/` | Fotos de platos (JPG/WebP, 600×450px) |
| `public/images/merch/` | Fotos de merchandising |
| `public/images/testimonials/` | Fotos de clientes (opcional) |

**Reemplazar imagen hero:**
Abre `components/HeroSection.tsx` y cambia la constante `HERO_IMAGE` por la ruta de tu foto:

```ts
// Opción A: imagen local (recomendado)
const HERO_IMAGE = "/images/hero.jpg";

// Opción B: URL externa
const HERO_IMAGE = "https://tu-dominio.com/foto.jpg";
```

**Reemplazar imágenes del menú:**
Abre `components/MenuShowcase.tsx` y edita el array `menuImages`:

```ts
const menuImages = [
  "/images/menu/pancakes.jpg",
  "/images/menu/aguacate.jpg",
  // ...
];
```

**Formato recomendado:** JPG o WebP, 600×450px, máx 150KB por foto.

---

## Desplegar en Vercel (5 minutos)

### Opción A: GitHub + Vercel (recomendado)

1. Sube el código a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Lanzamiento Café Miranda web"
   git remote add origin https://github.com/TU_USUARIO/cafe-miranda-web.git
   git push -u origin main
   ```

2. Ve a [vercel.com](https://vercel.com) → Import Project → conecta tu repo

3. Vercel detecta Next.js automáticamente → Deploy

4. Asigna tu dominio en Settings → Domains → `cafemiranda.es`

### Opción B: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Dominio personalizado

Una vez en Vercel:
1. Ve a Project Settings → Domains
2. Añade `cafemiranda.es` y `www.cafemiranda.es`
3. Apunta el DNS de tu dominio a los servidores de Vercel (te da las instrucciones)

---

## Google Maps embed real

Para usar el embed real de Google Maps de Café Miranda:

1. Ve a [Google Maps](https://maps.google.com)
2. Busca "Café Miranda Es Pujols Formentera"
3. Clic en Compartir → Insertar mapa
4. Copia la URL del `src` del iframe
5. Pégala en `config/cafe-miranda.ts`:
   ```ts
   googleMapsEmbed: "https://www.google.com/maps/embed?pb=...",
   ```

---

## Google Reviews link real

1. Busca "Café Miranda" en Google Maps
2. Clic en "Escribir reseña"
3. Copia la URL del navegador
4. Pégala en `config/cafe-miranda.ts`:
   ```ts
   googleReviews: "https://search.google.com/local/reviews?placeid=...",
   ```

---

## SEO checklist antes de lanzar

- [ ] Editar `config/cafe-miranda.ts` → sección `seo` con datos reales
- [ ] Añadir imagen OG real en `public/images/og-image.jpg` (1200×630px)
- [ ] Actualizar `googleMapsEmbed` con iframe real
- [ ] Actualizar `googleReviews` con link real de Google
- [ ] Añadir foto hero real en `/images/hero.jpg`
- [ ] Verificar número de teléfono es correcto
- [ ] Registrar en [Google Search Console](https://search.google.com/search-console)
- [ ] Añadir web a [Google Business Profile](https://business.google.com)

---

## Tecnologías

- **Next.js 14** — Framework React con App Router
- **Tailwind CSS** — Estilos utility-first
- **Framer Motion** — Animaciones suaves
- **Lucide React** — Iconos
- **Google Fonts** — Poppins, Inter, Playfair Display

---

*Desarrollado para Café Miranda, Formentera.*

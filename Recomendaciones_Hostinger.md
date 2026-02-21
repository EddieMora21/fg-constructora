# Guía y Recomendaciones para Desplegar en Hostinger

Tu aplicación React con Vite ya está optimizada para SEO y preparada para subirse a Hostinger. Sigue estos pasos para un despliegue exitoso:

## 1. Construir la Aplicación (Build)
Antes de subir los archivos, necesitas generar la versión de producción optimizada. Abre tu terminal en este proyecto y ejecuta:
```bash
npm run build
```
Esto creará una nueva carpeta llamada `dist`. **Esta carpeta `dist` y sus contenidos es todo lo que debes subir a Hostinger.**

## 2. Los Archivos Clave de Configuración (Ya Incluidos)
Dentro de tu nueva carpeta `dist` tendrás:
- `index.html`: Con etiquetas Meta, descripción general, Open Graph y soporte para Twitter Cards incrustado.
- `sitemap.xml`: Lista de tus rutas para indexación en Google.
- `robots.txt`: Directivas para permitir a los motores de búsqueda rastrear el dominio web.
- `.htaccess`: ¡**Crítico**! Este archivo se integrará en el "build" gracias a Vite. Evita que Hostinger devuelva errores **404 Page Not Found** cuando los usuarios accedan directamente a enlaces como `/servicios` desde motores de búsqueda.

*(Nota: Adicionalmente implementamos etiquetas meta dinámicas `<title>` y `<meta name="description">` de forma nativa en cada una de tus páginas (Inicio, Nosotros, Proyectos, Servicios) gracias a una característica interna de React 19. Esto garantiza que el SEO cambie fielmente por ruta).*

## 3. Subir los Archivos a Hostinger
1. Entra a tu **Panel de Hostinger (hPanel)**.
2. Navega a **Administrador de Archivos** o el File Manager del plan.
3. Abre la carpeta `public_html` de la raíz de tu dominio principal.
4. Borra el archivo `default.php` si es que Hostinger ha puesto uno por el registro inicial.
5. Sube o arrastra **todo el contenido resultante** de la carpeta local `dist` *dentro* de la ruta `public_html` del Hostinger.

## 4. Modificaciones Finales Post-Dominio
Actualmente, los campos SEO contienen descripciones genéricas basadas en tu sitio, y un dominio falso (`https://www.tudominio.com`).
**Una vez tengas tu dominio oficial comprado:**
1. Ve al archivo `index.html` y reemplaza el placeholder (`tudominio.com`) por tu URL real.
2. Ve al archivo `public/sitemap.xml` y reemplaza la cadena URL correspondiente a la de tu dominio.
3. Ve a `public/robots.txt` y enlaza el sitemap oficial.
4. Vuelve a hacer `npm run build` y súbelo a Hostinger.

## 5. Google Search Console Recomendado
Una vez estando en línea y con dominio accesible en web:
- Crea una cuenta gratis de Google Search Console y registra tu sitio web mediante URL/DNS en Hostinger.
- Informa enviando tu archivo alojado `sitemap.xml` dentro del panel de Google Search para acelerar drásticamente tu proceso de indexación oficial.

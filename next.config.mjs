/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exporta el proyecto como estático
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes (no funciona en GitHub Pages)
  },
  assetPrefix: './', // Asegura que los assets se carguen correctamente desde rutas relativas
  trailingSlash: true, // Asegura que las rutas terminen en "/" para que funcionen como archivos estáticos
};

export default nextConfig;

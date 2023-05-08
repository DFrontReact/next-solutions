/** @type {import('next').NextConfig} */
const nextConfig = {
  // {process.env.customKey} //
  env: {
    customKey: 'my-value',
    keyAPInstagram: '2j4342ljdm3n54n4m430',
  },
  // Permite definir una ruta secundaria de un dominio, permite establecer un prefijo de ruta para la aplicación.
  basePath: '/docs',
  // Permite reescribir una ruta de destino diferente. Es decir, enmascara la ruta de destino haciendo que parezca que el usuario no ha cambiado la ubicación en el sitio.
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
    ];
  },
  // Permite redirigir una ruta de solicitud entrante a una ruta de destino diferente.
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/about',
        permanent: true,
      },
    ];
  },
  // Permite establecer encabezados personalizados en la respuesta de una solicitud entrante en una ruta determinada.
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ];
  },
  // Permite asociar tipos de ficheros para su lectura.
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  // Permite obtimizar las imagenes.
  images: {
    loader: 'custom',
    loaderFile: './my/image/loader.js',
  },
  // Permite comprimir archivos, tambien actua con la respuesta del servidor convirtiendola en un formato más pequeño.
  compress: false,
  // Hace que tenga en cuenta las redirecciones, ser restrictivo con los barras laterales en cada redirevvion.
  // De /about/ a /about o no
  trailingSlash: true,
  // Especifica un nombre para usar en un directorio de compilación personalizada.
  distDir: 'build',
  // Ayuda a identificar ciclos de vida inseguros, uso de API heredado y una serie de otras características.
  reactStrictMode: true,
}

module.exports = nextConfig

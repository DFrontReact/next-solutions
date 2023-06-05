/** @type {import('next').NextConfig} */
const nextConfig = {
  
  env: {
    customKey: 'Principal',
  },
  
  basePath: '/home',
  
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: '/my-route',
      },
    ];
  },
  
  async redirects() {
    return [
      {
        source: '/my-route',
        destination: 'https://www.google.es/',
        permanent: true,
      },
    ];
  },
  
  async headers() {
    return [
      {
        source: "/about",
        headers: [
          {
            key: 'x-custom-header',
            value: 'ETE',
          },
          {
            key: 'x-another-custom-header',
            value: 'DORA',
          },
        ],
      },
    ];
  },
  
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  
  // images: {
  //   loader: 'custom',
  //   loaderFile: './src/loader/images.js',
  // },
  
  compress: false,
  
  trailingSlash: true,
  
  distDir: 'build',
  
  reactStrictMode: true,
}

module.exports = nextConfig

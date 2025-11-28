/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",      //  esto hace que se genere /out al hacer next build
  trailingSlash: true,   //  mejor para hostings tipo DonWeb
  images: {
    unoptimized: true,   //  necesario porque DonWeb no tiene image optimizer
  },
};

export default nextConfig;

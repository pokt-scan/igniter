/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_HOSTNAME: process.env.API_HOSTNAME,
  },
  experimental: {
    esmExternals: "loose",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: { and: [/\.(js|ts|md)x?$/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                  },
                  {
                    name: "cleanupIds",
                  },
                  {
                    name: "prefixIds",
                  },
                ],
              },
            },
          },
        ],
      }
    );

    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false,
      },
    };

    return config;
  },
  images: {
    domains: [
      "localhost",
      "poktscan-v1.nyc3.cdn.digitaloceanspaces.com",
      "cdn.prod.website-files.com",
      "trustsoothe.io",
    ],
  },
  output: "standalone",
};

export default nextConfig;

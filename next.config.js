/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: ["tailwindcss", "autoprefixer"],
            },
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;

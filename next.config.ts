import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  requestConfig: "./src/i18n/request.ts",
  experimental: {
    extract: true,
    messages: {
      path: "./messages",
      format: "json",
      locales: ["en", "id"],
      sourceLocale: "en"
    },
    srcPath: ["./src", "./data"]
  }
});

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.asqara.tech",
        port: "",
        pathname: "/projects/**",
        search: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

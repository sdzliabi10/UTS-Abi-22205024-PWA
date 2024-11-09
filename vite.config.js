import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "apple-touch-icon.png",
        "pwa-maskable-512x512.png",
        "assets/img.png",
        "assets/Sertifikat/ukom.png",
        "assets/Sertifikat/databasefoundations.png",
        "assets/Sertifikat/javafundamental.png",
        "assets/weeding.png",
        "assets/tiktok.png",
      ],
      manifest: {
        name: "Abi Portofolio",
        short_name: "Abi portofolio",
        description: "Portofolio Web app",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});

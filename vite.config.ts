import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import vue from "@vitejs/plugin-vue";
import router from "vue-router/vite";

export default defineConfig({
  plugins: [
    router({
      routesFolder: "app/pages",
    }),
    vue({}),
    nitro({
      serverDir: "server",
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});

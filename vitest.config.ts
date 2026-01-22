import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  test: {
    projects: [
      {
        plugins: [vue({})],
        resolve: { tsconfigPaths: true },
        test: {
          name: "app",
          include: ["app/tests/**/*.ts"],
          environment: "happy-dom",
        },
      },
      {
        resolve: { tsconfigPaths: true },
        test: {
          name: "api",
          include: ["server/tests/**/*.ts"],
          environment: "node",
        },
      },
    ],
  },
});

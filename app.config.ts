import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  vite: {
    ssr: { external: ["@prisma/client"] },
  },
  server: {
    preset: "cloudflare-pages",
    output: {
      dir: "{{ rootDir }}/dist",
      publicDir: "{{ output.dir }}/public",
      serverDir: "{{ output.dir }}/worker",
    },
    rollupConfig: {
      external: ["node:async_hooks"],
    },
    hooks: {
      compiled() {},
    },
  },
});

import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "i168ys",

  e2e: {
    baseUrl: "http://localhost:3000",
  },
});

import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "xocr7t",

  e2e: {
    baseUrl: "http://localhost:3000",
  },
});

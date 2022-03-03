import { defineConfig } from "tsup";

export default defineConfig({
    clean: true,
    dts: true,
    entryPoints: ["src/mod.ts"],
    outDir: "dist",
    format: ["esm", "cjs"],
    minify: false,
    skipNodeModulesBundle: true,
    sourcemap: false,
    target: "ES6"
});
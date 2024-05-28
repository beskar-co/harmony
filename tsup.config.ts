import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*.config.mjs'],
  sourcemap: false,
  minify: true,
  dts: true,
  format: ['esm'],
  splitting: false,
});

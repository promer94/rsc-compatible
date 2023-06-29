import { defineConfig } from 'tsup'

export default defineConfig({
  "entry": ["index.tsx"],
  "format": ["esm"],
  "dts": true,
  "clean": true
})
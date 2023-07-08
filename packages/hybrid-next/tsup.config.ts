import { defineConfig } from 'tsup'

export default defineConfig({
  "entry": ["index.tsx", "server.tsx", "shared.tsx"],
  "format": ["esm"],
  "dts": true,
  "clean": true
})
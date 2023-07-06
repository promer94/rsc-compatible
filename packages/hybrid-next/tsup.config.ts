import { defineConfig } from 'tsup'

export default defineConfig({
  "entry": ["index.tsx", "server-entry.tsx", "client-entry.tsx"],
  "format": ["esm"],
  "dts": true,
  "clean": true
})
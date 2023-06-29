import { defineConfig } from 'tsup'

export default defineConfig({
  "entry": ["index.tsx", "react-server.tsx"],
  "format": ["esm"],
  "dts": "index.tsx",
  "clean": true
})
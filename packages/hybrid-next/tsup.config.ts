import { defineConfig } from 'tsup'

export default defineConfig({
  "entry": ["index.client.tsx", "index.react-server.tsx", "index.shared.tsx"],
  "format": ["esm"],
  "dts": true,
  "clean": true
})
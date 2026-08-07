import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const page = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  appType: 'mpa',
  input: {
    main: page('./index.html'),
    privacy: page('./privacy/index.html'),
    terms: page('./terms/index.html'),
    deleteAccount: page('./delete-account/index.html'),
  },
})

import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const root = import.meta.dirname

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        services: resolve(root, 'services.html'),
        work: resolve(root, 'work.html'),
        about: resolve(root, 'about.html'),
        contact: resolve(root, 'contact.html'),
        blog: resolve(root, 'blog.html'),
        demo: resolve(root, 'demo.html'),
        gtrtone: resolve(root, 'gtrtone.html'),
        rallyupbots: resolve(root, 'rally-up-bots.html'),
        vivi: resolve(root, 'vivi.html'),
        mic: resolve(root, 'mic.html'),
        kindeaudit: resolve(root, 'kinde-audit.html'),
      },
    },
  },
})

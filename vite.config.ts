import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'

const DEV_BLOCK = /[ \t]*<!-- dev-strip:start[\s\S]*?<!-- dev-strip:end -->\r?\n?/g
const DEV_MARKER = /[ \t]*<!-- dev-strip:(?:start|end)[^>]*-->\r?\n?/g

// Everything between <!-- dev-strip:start --> and <!-- dev-strip:end --> in index.html
// (e.g. the Meta Pixel) is removed while the dev server runs, so local work never
// pollutes analytics. In the production build only the marker comments are removed
// and the wrapped content is kept. `ctx.server` exists only in dev mode.
const devStrip = (): Plugin => ({
  name: 'html-dev-strip',
  transformIndexHtml: (html: string, ctx): string =>
    html.replace(ctx.server ? DEV_BLOCK : DEV_MARKER, ''),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devStrip()],
})

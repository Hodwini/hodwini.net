import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'

const app = new Elysia()
  // Serves files from ./public at /public with Bun Fullstack Dev Server
  .use(staticPlugin())
  .get('/api/health', () => ({ ok: true }))
  .listen(3000)

console.log(`🦊 Elysia running at http://localhost:${app.server?.port}`)

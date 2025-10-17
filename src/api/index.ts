import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'

const WEB_ROOT = process.env.WEB_ROOT ?? './src/web'

export const app = new Elysia()
    .get('/', () => Bun.file(`${WEB_ROOT}/index.html`))
    .get('/api/hello', () => ({ ok: true }))
    .use(staticPlugin({
        assets: WEB_ROOT,
        prefix: '/web',
    }))

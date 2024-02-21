import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge';

const app = new Hono().basePath('/api/v1')

app.get('/hello', (c) => {
  return c.json({
    message:  () => {
      console.log(process.env.NODE_ENV)
      return {
        a: 1+1
      }
    }
  })
})

export const GET = handle(app)
export const POST = handle(app)
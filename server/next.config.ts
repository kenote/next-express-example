import next from 'next'
import Server from 'next/dist/next-server/server/next-server'
import { Request, Response } from 'express'

const dev: boolean = process.env.NODE_ENV !== 'production'
const app: Server = next({ dev, dir: 'client' })
export const nextReady = () => app.prepare()

export async function nexRender (req: Request, res: Response): Promise<void> {
  return app.getRequestHandler()(req, res)
}

export { nextHandler } from '~/middleware/next'
import * as http from 'http'
import * as express from 'express'
import { Host, Port } from '~/config'
import { nextReady, nextHandler, nexRender } from '~/next.config'

async function start (): Promise<void> {
  await nextReady()
  let app: express.Application = express()
  
  // Render Next ...
  app.use(nextHandler, nexRender)
  
  // Running Server ...
  http.createServer(app).listen(Port, Host, () => {
    console.log(`\nService running in %s environment, PORT: %d ...`, process.env.NODE_ENV || 'development', Port)
  })
}

start()
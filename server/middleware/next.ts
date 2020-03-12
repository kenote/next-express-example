import { Response, NextFunction } from 'express'
import { NextTypes } from '@/types/restful'
import { Channel } from '@/types/channel'
import * as channels from '~/channel.json'

type Request = NextTypes.request

export async function nextHandler (req: Request, res: Response, next: NextFunction): Promise<void> {
  let isNextPage: boolean = !/^(\/\_next|\/__webpack_hmr|\/\_error)|(\.ico|\.png|\.css|\.js)$/.test(req.path)
  if (isNextPage) {
    // ...
    req.__name = 'Next Server'
    req.__channels = channels as Channel.element[]
  }
  return next()
}
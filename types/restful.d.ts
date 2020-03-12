import { Request } from 'express'
import { Channel } from './channel'


/**
 * HTTPServer
 */
export interface HTTPServer {

  /**
   * Request
   */
  req          : NextTypes.request
}

export declare namespace NextTypes {

  interface request extends Request {
    __name       : string
    __channels   : Channel.element[]
  }
}
import type { Request } from 'express'
import { User } from './user'

export interface AuthenticatedReq extends Request {
    user?: User
}
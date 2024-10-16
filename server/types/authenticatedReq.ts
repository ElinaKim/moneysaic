import type { Request } from 'express'
import { User } from './user'

export interface AuthenticatedRqeust extends Request {
    user?: User
}
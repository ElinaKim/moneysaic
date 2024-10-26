import type { Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { AuthenticatedReq } from '../../types/authenticatedReq'
import { User } from '../../types/user'

export const authenticateToken = (req: AuthenticatedReq, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        res.status(401)
    }
    try {
        const payload = jwt.verify(token as string, process.env.JWT_SECRET!)
        req.user = payload as User
        next()
    } catch {
        res.sendStatus(403)
    }
}


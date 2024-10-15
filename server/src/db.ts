import knex from 'knex'
import config from '../knexfile'
import { env } from 'process'

const environment = process.env.NODE_ENV || 'development'
const db = knex(config[environment])

export default db
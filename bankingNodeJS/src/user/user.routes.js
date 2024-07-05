'use strict'

import express from 'express'
import { login, test } from './user.controller.js'

const api = express.Router()

api.get('/test', test)
api.post('/login', login)

export default api
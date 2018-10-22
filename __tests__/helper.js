const supertest = require('supertest')

const server = require('../server')

global.request = supertest(server().listen(1111))

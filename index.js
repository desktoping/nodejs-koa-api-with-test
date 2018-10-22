const dotenv = require('dotenv')

dotenv.load()

const server = require('./server')
const { PORT: port } = process.env

server().listen(port, () => console.log(`Server ready at port ${port}`))

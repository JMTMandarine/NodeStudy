// @ts-check

const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 4000
    res.end('Hello')
})

const PORT = 4000
server.listen(PORT, () => {
    console.log('The Server is listening at port : ' + PORT)
})

const ex = require('express');
const cors = require('cors');
const { fileMetadataRouter } = require('./routes/file-metadata');
const { validateToken, handleError } = require('./middleware');


const server = ex();

server.use(cors({ origin: [process.env.CORS_WHITELIST, process.env.AUTH0_ISSUER_BASE_URL] }))
server.use((req, res, next) => {
    console.log(req.method, req.originalUrl, req.headers.referer)
    next();
})
server.use('/api/files', validateToken, fileMetadataRouter)

server.use(handleError);

module.exports = {
    server
}
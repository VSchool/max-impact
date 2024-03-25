const ex = require('express');
const { fileMetadataRouter } = require('./routes/file-metadata');
const { validateAuthToken, handleError, enableCors } = require('./middleware');


const server = ex();

server.use((req, res, next) => {
    console.log(req.method, req.originalUrl, req.headers.referer, req.headers.body)
    next();
})
server.use(ex.json());
server.use(ex.urlencoded({ extended: true }));
server.use(enableCors)
server.use('/api/file-metadata', validateAuthToken, fileMetadataRouter)
server.use(handleError);

module.exports = {
    server
}
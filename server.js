const ex = require('express');
const { fileMetadataRouter } = require('./routes/file-metadata');
const { validateAuthToken, handleError, enableCors, allowOperation } = require('./middleware');


const server = ex();

server.use((req, res, next) => {
    console.log(req.method, req.originalUrl, req.headers.referer, req.headers.body)
    next();
})
server.use(ex.json());
server.use(ex.urlencoded({ extended: true }));
server.use(enableCors)
server.use('/api/file-metadata', validateAuthToken, fileMetadataRouter)

server.get('/authorized-to-read', validateAuthToken, allowOperation(['read:files']), (req, res) => {
    res.status(200).send('Resources sent!')});
server.use(handleError);

module.exports = {
    server
}
const ex = require('express');
const { fileMetadataRouter } = require('./routes/file-metadata');
const { validateAuthToken, handleError, enableCors, allowOperation } = require('./middleware');
const { stripeRouter } = require('./routes/stripeRouter');


const server = ex();

// logging middleware
server.use((req, res, next) => {
    console.log(req.method, req.originalUrl, req.headers.referer, req.headers.body)
    next();
})
// remove top level ex.json() so that we get raw json on the stripe route, include in each route
// server.use(ex.json());
server.use(ex.urlencoded({ extended: true }));
server.use(enableCors)
// routers
server.use('/api/file-metadata', validateAuthToken, ex.json(), fileMetadataRouter)
server.use('/stripe', stripeRouter)

server.get('/authorized-to-read', validateAuthToken, allowOperation(['read:files']), (req, res) => {
    res.status(200).send('Resources sent!')});
server.use(handleError);

module.exports = {
    server
}
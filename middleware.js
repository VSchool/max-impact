const { auth } = require('express-oauth2-jwt-bearer');
const cors = require('cors');
const multer = require('multer');
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: Infinity }
})


const validateAuthToken = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256',
});

const enableCors = cors({ origin: [...process.env.CORS_WHITELIST.split(','), process.env.AUTH0_ISSUER_BASE_URL] })

const allowOperation = (permissions) => (req, res, next) => {
    if (permissions.every(permission => req.auth.payload.permissions.includes(permission)))
        return next();
    res.status(403);
    next(Error(`Access denied: ${permissions}. You don't have permission to access requested resource`))
}

const processFile = field => upload.single(field);

const handleError = (err, req, res, next) => {
    res.send({ success: false, error: err.message });
}


module.exports = {
    validateAuthToken,
    enableCors,
    allowOperation,
    processFile,
    handleError
}
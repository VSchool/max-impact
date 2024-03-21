const { auth } = require('express-oauth2-jwt-bearer');


const validateToken = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256',
});

const allowOperation = (permissions) => (req, res, next) => {
    if (permissions.every(permission => req.auth.payload.permissions.includes(permission)))
        return next();
    res.status(403);
    next(Error(`Access denied: ${req.auth.payload.permissions}. You don't have permission to access requested resource`))
}

const handleError = (err, req, res, next) => {
    res.send({ success: false, error: err.message });
}

module.exports = {
    validateToken,
    allowOperation,
    handleError
}
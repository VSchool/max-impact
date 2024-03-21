const ex = require('express');
const { allowOperation } = require('../middleware');

const fileMetadataRouter = ex.Router();

fileMetadataRouter.get('/', allowOperation(['read:files']), (req, res) => {
    res.status(200).send({
        success: true,
        files: []
    })
})

module.exports = {
    fileMetadataRouter
}
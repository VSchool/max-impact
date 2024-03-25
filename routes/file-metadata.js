const ex = require('express');
const { allowOperation, processFile } = require('../middleware');
const { getAllFileMetadata, createFileMetadata, deleteFileMetadata } = require('../services/file-metadata');

const fileMetadataRouter = ex.Router();

fileMetadataRouter.get('/', allowOperation(['read:files']), async (req, res, next) => {
    try {
        const files = await getAllFileMetadata();
        res.status(200).send({
            success: true,
            files
        })
    } catch (err) {
        res.status(500);
        next(err);
    }
});

fileMetadataRouter.post('/', allowOperation(['create:files']), processFile('file'), async (req, res, next) => {
    try {
        const metadata = await createFileMetadata(req.body.displayName, req.file, req.body.linked)
        res.status(201).send({ success: true, metadata })
    } catch (err) {
        res.status(500);
        next(err);
    }
})

fileMetadataRouter.delete('/:id', allowOperation(['delete:files']), async (req, res, next) => {
    try {
        const id = await deleteFileMetadata(req.params.id)
        res.status(200).send({ success: true, id })
    } catch (err) {
        res.status(500);
        next(err);
    }
})

module.exports = {
    fileMetadataRouter
}
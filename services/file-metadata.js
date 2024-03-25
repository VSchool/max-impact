const { FileMetadataModel } = require('../models/FileMetadata');
const { deleteAsset, upload } = require('./cdn');

const getAllFileMetadata = async () => {
    const files = await FileMetadataModel.find().populate('linked');
    return files;
}

const createFileMetadata = async (displayName, file, linked) => {
    const asset = await upload(displayName, file);
    const doc = new FileMetadataModel({
        asset_id: asset.asset_id,
        public_id: asset.public_id,
        format: asset.format,
        url: asset.secure_url,
        linked: linked || undefined
    });
    return (await doc.save()).populate('linked');
}

const deleteFileMetadata = async id => {
    const doc = await FileMetadataModel.findById(id).populate('linked');
    if (!doc) throw Error(`File metadata now found with id: ${id}`);
    const resourceType = doc.format === 'pdf' ? 'image' : 'video';
    await deleteAsset(doc.public_id, resourceType)
    await doc.deleteOne();
    return id;
}

module.exports = {
    getAllFileMetadata,
    createFileMetadata,
    deleteFileMetadata
}
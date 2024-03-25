const mg = require('mongoose');

const FileMetadataSchema = new mg.Schema({
    url: String,
    format: String,
    public_id: {
        type: String,
        unique: true
    },
    asset_id: String,
    linked: {
        type: mg.Schema.Types.ObjectId,
        ref: "FileMetadata",
    }
});

const FileMetadataModel = mg.model('FileMetadata', FileMetadataSchema);

module.exports = {
    FileMetadataModel
}


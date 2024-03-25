const { v2: cloudinary } = require('cloudinary');


const init = () => {
    return cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
}

const upload = async (displayName, file) => {
    return await new Promise((res, rej) => {
        const cb = (err, result) => {
            if (err) return rej(err);
            res(result);
        };

        const isVideo = file.mimetype === 'video/mp4';
        const resource_type = isVideo ? 'video' : 'image';
        const folder = isVideo ? 'videos' : 'documents';
        const format = isVideo ? 'mp4' : 'pdf';

        cloudinary.uploader.upload_stream({
            resource_type,
            folder,
            public_id: displayName,
            format
        }, cb)
            .end(file.buffer);
    })
}

const deleteAsset = async (id, resourceType) => {
    await cloudinary.uploader.destroy(id, {resource_type: resourceType})
}


module.exports = {
    init,
    upload,
    deleteAsset
}
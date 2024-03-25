import { useFileMetadataContext } from "../hooks"

export const FileMetadataListItem = ({ metadata }) => {
    const { deleteFileMetadata } = useFileMetadataContext()
    const handleDelete = () => { deleteFileMetadata(metadata._id) }

    return (
        <li key={metadata._id}>
            <a href={metadata.url}>{metadata.public_id}</a>
            {metadata.linked &&
                <span> Linked with <a href={metadata.linked.url}>{metadata.linked.public_id}</a></span>
            }
            <button onClick={handleDelete}>X</button>
        </li>
    )
}
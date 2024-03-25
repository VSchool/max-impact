import { useFileMetadataContext } from "../hooks"
import { FileMetadataListItem } from "./FileMetadataListItem";

export const FileMetadataList = () => {
    const { fileMetadataList } = useFileMetadataContext();

    return (
        <ul>
            {fileMetadataList.map(metadata => (
                <FileMetadataListItem key={metadata._id} metadata={metadata} />
            ))}
        </ul>
    )
}
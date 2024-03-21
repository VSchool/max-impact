import { FileMetadataContext } from "../contexts";
import { useFileMetadataApi } from "../hooks";

export const FileMetadataProvider = ({ children }) => {
    const fileMetadataApi = useFileMetadataApi();
    return (
        <FileMetadataContext.Provider value={fileMetadataApi}>
            {children}
        </FileMetadataContext.Provider>
    )
}
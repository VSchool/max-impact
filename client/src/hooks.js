import { useCallback, useContext, useMemo, useState } from "react"
import { http } from "./http";
import { useAuth0 } from "@auth0/auth0-react";
import { FileMetadataContext } from "./contexts";


export const useHttpClient = () => {
    const { getAccessTokenSilently } = useAuth0();

    const request = useCallback(async (url, options) => {
        const accessToken = await getAccessTokenSilently();
        return http.request(accessToken)(url, options)
    }, [getAccessTokenSilently]);

    return {
        request
    }
}

export const useFileMetadataApi = () => {
    const { request } = useHttpClient();
    const [fileMetadataList, setFileMetadataList] = useState([]);

    const getAllFileMetadata = useCallback(async () => {
        const data = await request('/api/files');
        setFileMetadataList(data.files)
    }, [request, setFileMetadataList]);

    return useMemo(() => ({
        fileMetadataList,
        getAllFileMetadata
    }), [fileMetadataList, getAllFileMetadata])
}

export const useFileMetadataContext = () => useContext(FileMetadataContext);
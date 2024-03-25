import { useContext, useMemo, useState } from "react"
import { http } from "./http";
import { useAuth0 } from "@auth0/auth0-react";
import { FileMetadataContext } from "./contexts";


export const useHttpClient = () => {
    const { getAccessTokenSilently } = useAuth0();

    const handler = async (url, options) => {
        const accessToken = await getAccessTokenSilently();
        return http.request(accessToken)(url, options)
    };

    const request = {
        get: (url, options) => handler(url, { ...options, method: 'GET' }),
        post: (url, options) => handler(url, { ...options, method: 'POST' }),
        delete: (url, options) => handler(url, { ...options, method: 'DELETE' }),
        put: (url, options) => handler(url, { ...options, method: 'PUT' }),
    }

    return {
        request
    }
}

export const useFileMetadataApi = () => {
    const { request } = useHttpClient();
    const [fileMetadataList, setFileMetadataList] = useState([]);

    const documentsOnly = useMemo(() => fileMetadataList.filter(metadata => metadata.format === 'pdf'));

    const getAllFileMetadata = async () => {
        const data = await request.get('/api/file-metadata');
        setFileMetadataList(data.files)
    };

    const createFileMetadata = async (formData) => {
        const { metadata } = await request.post('/api/file-metadata', {
            body: formData
        })
        setFileMetadataList(prev => ([...prev, metadata]))
    }

    const deleteFileMetadata = async id => {
        await request.delete(`/api/file-metadata/${id}`);
        setFileMetadataList(prev => prev.filter(metadata => metadata._id !== id))
    }


    return useMemo(() => ({
        fileMetadataList,
        documentsOnly,
        getAllFileMetadata,
        createFileMetadata,
        deleteFileMetadata
    }), [fileMetadataList, getAllFileMetadata, createFileMetadata, deleteFileMetadata])
}

export const useUploadForm = () => {
    const [fields, setFields] = useState({ displayName: '', file: null, linked: '' });
    const { createFileMetadata, documentsOnly } = useFileMetadataContext();
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const updateField = (key, value) => {
        setFields(prev => ({ ...prev, [key]: value }))
    }

    const submitForm = async () => {
        const formData = new FormData();
        Object.keys(fields).forEach(key => formData.append(key, fields[key]))
        await createFileMetadata(formData);
    }

    const showLinkedSelection = fields.file && fields.file.type === 'video/mp4'
    const linkOptions = [{ label: 'None', value: undefined }].concat(documentsOnly.map(doc => ({ label: doc.public_id, value: doc._id })));

    return useMemo(() => ({
        fields,
        updateField,
        submitForm,
        submitting,
        setSubmitting,
        error,
        setError,
        linkOptions,
        showLinkedSelection
    }), [fields, updateField, submitForm, submitting, setSubmitting, error, setError, linkOptions])

}

export const useFileMetadataContext = () => useContext(FileMetadataContext);
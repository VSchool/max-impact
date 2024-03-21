export const http = {
    request: (accessToken) => {
        return (url, options) => fetch(url, {
            ...options,
            headers: {
                authorization: `Bearer ${accessToken}`,
                ...options
            }
        }).then(res => res.json())
    }
}
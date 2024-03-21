import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouteProvider } from './providers/RouterProvider'
import { AuthProvider } from './providers/AuthProvider'
import { FileMetadataProvider } from './providers/FileMetadataProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <FileMetadataProvider>
        <RouteProvider />
      </FileMetadataProvider>
    </AuthProvider>
  </React.StrictMode>
)

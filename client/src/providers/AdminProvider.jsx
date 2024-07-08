// AdminContext.js
import React, { createContext, useContext } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ isAdmin, children }) => {
  return (
    <AdminContext.Provider value={isAdmin}>
      {children}
    </AdminContext.Provider>
  );
};

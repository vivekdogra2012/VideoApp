import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userDataAll, setUserDataAll] = useState(null);

  const userDataFunc = (data) => {
    setUserDataAll(data);
  };

  const signIn = (data) => {
    setUserToken(data);
  };

  const signOut = () => {
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userDataFunc, userDataAll, userToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

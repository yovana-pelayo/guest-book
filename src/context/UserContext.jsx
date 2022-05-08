import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null });

  const login = (email, password) => {
    if (email === 'yovi@testing.com' && password === 'secret') {
      setUser({ email: 'yovi@testing.com' });
    } else {
      throw new Error('invalid login or email');
    }
  };
  const logout = () => {
    setUser({ email: null });
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
// user, setUser is state
// children is component
// if we dont have access to the context, it is not within userProvider then give an error
// if we do have access to context then return it girl

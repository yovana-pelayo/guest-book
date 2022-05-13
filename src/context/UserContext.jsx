import { createContext, useContext, useState } from 'react';
import { getUser, signInUser, signOutUser, signUpUser } from '../services/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });
  // const [newUser, setNewUser] = useState();

  const login = async (email, password) => {
    const authUser = await signInUser({ email, password });
  };
  const signUp = async (email, password) => {
    const registerUser = await signUpUser({ email, password });
  };
  const logout = () => {
    signOutUser();
    setUser({ email: null });
  };
  return (
    <UserContext.Provider value={{ user, login, logout, signUp }}>
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

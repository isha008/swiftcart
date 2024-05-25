import React, { createContext, useState } from 'react';
import UserContext from '../userContext/userContext.js';
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  function updateName (newName) {
    console.log('new',newName)
    setUser(newName)
  }

  return (
    <UserContext.Provider value={{ user, updateName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;



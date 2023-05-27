import React, { createContext, useState } from 'react';

// Define the user context type
interface UserContextType {
  userStatus: string;
  updateUserStatus: (status: string) => void;
}

// Create the user context
export const UserContext = createContext<UserContextType>({
  userStatus: '',
  updateUserStatus: () => {},
});

interface UserProviderProps {
    children: React.ReactNode; // Update the type definition for children
  }

// Create the user context provider
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userStatus, setUserStatus] = useState<string>('inactive');

  // Update the user status
  const updateUserStatus = (status: string) => {
    setUserStatus(status);
  };

  // Provide the user context value
  const contextValue: UserContextType = {
    userStatus,
    updateUserStatus,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};


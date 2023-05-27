import React, { createContext, useState } from 'react';

// Define the user context type
interface UserContextType {
  userStatus: string;
  updateUserStatus: (status: string) => void;
  userId: any;
  setUserId: any;
}

// Create the user context
export const UserContext = createContext<UserContextType>({
  userStatus: '',
  updateUserStatus: () => {},
  userId: null,
  setUserId: null,
});

interface UserProviderProps {
    children: React.ReactNode; // Update the type definition for children
  }

// Create the user context provider
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userStatus, setUserStatus] = useState<string>('inactive');
  const [userId, setUserId] = useState<any>();

  // Update the user status
  const updateUserStatus = (status: string) => {
    setUserStatus(status);
  };

  // Provide the user context value
  const contextValue: UserContextType = {
    userStatus,
    updateUserStatus,
    userId,
    setUserId
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};


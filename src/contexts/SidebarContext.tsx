import { createContext, ReactNode, useContext, useState } from "react";

type SidebarProviderProps = {
  children: ReactNode;
};

type SidebarContextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};

const SidebarContext = createContext({} as SidebarContextType);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);

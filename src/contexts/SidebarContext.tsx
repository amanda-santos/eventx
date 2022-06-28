import { createContext, ReactNode, useContext, useState } from "react";
import { GetLessonsQuery, useGetLessonsQuery } from "../graphql/generated";

type SidebarProviderProps = {
  children: ReactNode;
};

type SidebarContextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  lessons?: GetLessonsQuery["lessons"];
};

const SidebarContext = createContext({} as SidebarContextType);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data: sidebarData } = useGetLessonsQuery();
  const lessons = sidebarData?.lessons;

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, lessons }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);

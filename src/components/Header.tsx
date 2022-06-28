import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";

import { Logo } from "./Logo";
import { useSidebar } from "../contexts/SidebarContext";

export const Header = (): ReactElement => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  return (
    <header className="w-full py-8 px-6 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600">
      <Link to="/">
        <Logo />
      </Link>

      <button
        type="button"
        aria-label="Lessons"
        className="flex items-center lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        Lessons
        {isSidebarOpen ? (
          <X size={32} className="ml-2 text-blue-500" />
        ) : (
          <List size={32} className="ml-2 text-blue-500" />
        )}
      </button>
    </header>
  );
};

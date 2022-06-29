import { ReactElement, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Header, Sidebar, Video } from "../components";
import { useSidebar } from "../contexts/SidebarContext";

type Params = {
  slug: string;
};

export const Event = (): ReactElement => {
  const { slug: paramSlug } = useParams<Params>();
  const { lessons } = useSidebar();
  const navigate = useNavigate();

  useEffect(() => {
    !paramSlug && lessons && navigate(`/event/lesson/${lessons?.[0].slug}`);
  }, [lessons]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
};

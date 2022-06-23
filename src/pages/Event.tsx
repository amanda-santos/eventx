import { ReactElement } from "react";
import { useParams } from "react-router-dom";

import { Header, Sidebar, Video } from "../components";

type Params = {
  slug: string;
};

export const Event = (): ReactElement => {
  const { slug } = useParams<Params>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video /> : <div className="flex-1" />}

        <Sidebar />
      </main>
    </div>
  );
};

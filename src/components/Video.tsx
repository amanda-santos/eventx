import { ReactElement, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DefaultUi, Player, Youtube } from "@vime/react";
import classNames from "classnames";
import { CircleNotch, DiscordLogo, Lightning } from "phosphor-react";

import { useGetLessonBySlugQuery } from "../graphql/generated";
import { useSidebar } from "../contexts/SidebarContext";
import { HelpLink } from "./HelpLink";

import "@vime/core/themes/default.css";
import { isPast } from "date-fns";
import { SimpleText } from "./SImpleText";

type Params = {
  slug: string;
};

export const Video = (): ReactElement => {
  const { slug } = useParams<Params>();
  const { data, loading } = useGetLessonBySlugQuery({
    variables: {
      slug,
    },
  });

  const { isSidebarOpen } = useSidebar();
  const [isLessonAvailable, setIsLessonAvailable] = useState(false);

  useEffect(() => {
    data?.lesson &&
      setIsLessonAvailable(isPast(new Date(data.lesson?.availableAt)));
  }, [data]);

  if (loading || !data?.lesson) {
    return (
      <SimpleText
        className={classNames({
          hidden: isSidebarOpen,
        })}
      >
        <>
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <CircleNotch size={24} />
          </svg>
          <p className="">Loading...</p>
        </>
      </SimpleText>
    );
  }

  if (!isLessonAvailable) {
    return (
      <SimpleText
        className={classNames({
          hidden: isSidebarOpen,
        })}
      >
        <p className="">😢 Sorry, this lesson isn't available yet.</p>
      </SimpleText>
    );
  }

  return (
    <div
      className={classNames("flex-1", {
        hidden: isSidebarOpen,
      })}
    >
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-pink-500"
                  src={data.lesson.teacher.avatarURL}
                  alt={data.lesson.teacher.name}
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-60">
            <a
              href="https://discord.com/"
              target="_blank"
              className="p-4 text-sm bg-pink-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-pink-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Discord
            </a>

            <a
              href={data?.lesson?.challenge?.url}
              target="_blank"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Access Challenge
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-1 lg:grid-cols-2">
          <HelpLink
            title="Complementary Material"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit. Ut nullam
                praesent accumsan mollis fermentum."
          />

          <HelpLink
            title="Wallpapers"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit. Ut nullam
                praesent accumsan mollis fermentum."
          />
        </div>
      </div>
    </div>
  );
};

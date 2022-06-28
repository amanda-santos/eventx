import { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import { format, isPast } from "date-fns";
import { CheckCircle, Lock } from "phosphor-react";
import classNames from "classnames";

import { useSidebar } from "../contexts/SidebarContext";

type LessonProps = {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
};

export const Lesson = ({
  title,
  slug,
  availableAt,
  type,
}: LessonProps): ReactElement => {
  const { slug: urlSlug } = useParams<{ slug: string }>();
  const { setIsSidebarOpen } = useSidebar();
  const isActiveLesson = slug === urlSlug;

  const isLessonAvailable = isPast(availableAt);
  const formattedAvailableAt = format(
    availableAt,
    "EEEE' • 'MMMM do' • 'h':'mm aaa"
  );

  const handleLessonClick = (slug: LessonProps["slug"]) => {
    setIsSidebarOpen(false);
    history.pushState({}, "", `/event/lesson/${slug}`);
  };

  return (
    <Link
      to={`/event/lesson/${slug}`}
      onClick={() => handleLessonClick(slug)}
      className="group"
    >
      <span className="text-gray-300">{formattedAvailableAt}</span>

      <div
        className={classNames("rounded border border-gray-500 p-4 mt-2 ", {
          "group-hover:border-blue-500": !isActiveLesson,
          "group-hover:border-pink-500": isActiveLesson,
          "bg-pink-500": isActiveLesson,
        })}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm font-medium flex items-center gap-2",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Available
            </span>
          ) : (
            <span className="text-sm text-pink-300 font-medium flex items-center gap-2">
              <Lock size={20} />
              Soon
            </span>
          )}

          <span
            className={classNames(
              "text-xs rounded px-2 py-[0.125rem] text-white border font-bold",
              {
                "border-white": isActiveLesson,
                "border-blue-500": !isActiveLesson,
              }
            )}
          >
            {type === "live" ? "LIVE" : "LESSON"}
          </span>
        </header>

        <strong
          className={classNames("mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};

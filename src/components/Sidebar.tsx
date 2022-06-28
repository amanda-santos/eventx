import classNames from "classnames";

import { useSidebar } from "../contexts/SidebarContext";
import { Lesson } from "./Lesson";

export const Sidebar = () => {
  const { lessons, isSidebarOpen } = useSidebar();

  return (
    <aside
      className={classNames(
        "lg:block w-full lg:w-[348px] bg-gray-700 p-6 border-l border-gray-600",
        {
          hidden: !isSidebarOpen,
        }
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Classes schedule
      </span>

      <div className="flex flex-col gap-8">
        {lessons?.map(({ id, title, slug, availableAt, lessonType }) => (
          <Lesson
            key={id}
            title={title}
            availableAt={new Date(availableAt)}
            slug={slug}
            type={lessonType}
          />
        ))}
      </div>
    </aside>
  );
};

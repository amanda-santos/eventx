import { useQuery } from "@apollo/client";

import { GetLessonsQueryResponse, GET_LESSONS_QUERY } from "../graphql";
import { Lesson } from "./Lesson";

export const Sidebar = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Classes schedule
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(({ id, title, slug, availableAt, lessonType }) => (
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

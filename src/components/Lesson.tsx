import { format, isPast } from "date-fns";
import { CheckCircle, Lock } from "phosphor-react";
import { ReactElement } from "react";

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
  const isLessonAvailable = isPast(availableAt);
  const formattedAvailableAt = format(
    availableAt,
    "EEEE' • 'MMMM do' • 'h':'mm aaa"
  );

  return (
    <a href="#">
      <span className="text-gray-300">{formattedAvailableAt}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Available
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Soon
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            {type === "live" ? "LIVE" : "LESSON"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </a>
  );
};

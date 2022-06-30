import { ReactElement } from "react";

type SimpleTextProps = {
  children: ReactElement;
  className: string;
};

export const SimpleText = ({
  children,
  className,
}: SimpleTextProps): ReactElement => (
  <div className={`flex-1 ${className}`}>
    <span className="flex items-center justify-center h-screen text-xl font-medium">
      {children}
    </span>
  </div>
);

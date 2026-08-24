import { Flame } from "lucide-react";
import type { ReactNode } from "react";

export function SectionHeading({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="flex items-center gap-1.5 text-lg font-bold text-primary">
        <Flame className="size-5 fill-amber-400 text-amber-400" />
        {children}
      </h2>
      {action}
    </div>
  );
}

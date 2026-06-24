import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary", className)}
      {...props}
    />
  );
}

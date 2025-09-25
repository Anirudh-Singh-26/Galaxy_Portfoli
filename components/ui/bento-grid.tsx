import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[22rem] md:grid-cols-3 lg:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-cyan-500/40 dark:border-cyan-500/40 dark:bg-black/40",
        className
      )}
    >
      {/* Image on Top */}
      {header && (
        <div className="w-full h-48 md:h-56  lg:h-64 overflow-hidden">
          {header}
        </div>
      )}

      {/* Content below image */}
      <div className="flex flex-col gap-2 p-5">
        {title && (
          <div className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
            {title}
          </div>
        )}
        {description && (
          <div className="text-sm text-neutral-300 dark:text-neutral-400">
            {description}
          </div>
        )}
      </div>

      {/* Hover overlay for subtle shine */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-20 rounded-xl"></div>
    </div>
  );
};

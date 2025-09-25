// components/ui/projects-grid.tsx
import { cn } from "@/lib/utils";

export const ProjectsGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl auto-rows-fr",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ProjectsGridItem = ({
  className,
  title,
  description,
  tags,
  image,
  onClick,
}: {
  className?: string;
  title?: string;
  description?: string;
  tags?: string[];
  image?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 shadow-md backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-cyan-500/40",
        className
      )}
      onClick={onClick}
    >
      {image && (
        <div className="w-full h-52 sm:h-56 md:h-60 lg:h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-2 p-4 sm:p-5">
        {title && (
          <div className="text-lg sm:text-xl font-semibold text-white">
            {title}
          </div>
        )}
        {description && (
          <div className="text-sm sm:text-base text-neutral-300 line-clamp-3">
            {description}
          </div>
        )}
        {tags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[#251f38] text-xs sm:text-sm font-semibold text-purple-500 rounded-full px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* subtle shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-20 rounded-2xl"></div>
    </div>
  );
};

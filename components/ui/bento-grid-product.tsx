import { cn } from "@/lib/utils"
import { StarIcon } from "lucide-react";

export const BentoGridProduct = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-3">
                <div className="flex flex-row space-x-3 items-center">
                    <div className="flex flex-row space-x-2 items-center">
                        <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <p className="text-sm">{4}</p>
                    </div>
                    {/* <p> | </p> */}
                    <div className="bg-slate-200 rounded-md px-3 py-1">
                        <p className="text-xs">{10} Sold</p>
                    </div>
                </div>
                <p className="font-semibold text-xl text-secondarytext">{10000}</p>
            </div>
        </div>
        {/* <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div> */}
      </div>
    </div>
  );
};

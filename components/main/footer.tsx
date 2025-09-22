import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full backdrop-blur-sm text-gray-200 shadow-lg p-4 sm:p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-7xl">
        <div className="w-full h-full flex flex-col sm:flex-row items-center justify-center sm:justify-around flex-wrap gap-6 sm:gap-4">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[180px] sm:min-w-[200px] h-auto flex flex-col items-center justify-start text-center"
            >
              <h3 className="font-bold text-sm sm:text-[16px] mb-2 sm:mb-3">
                {column.title}
              </h3>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-row items-center justify-center hover:text-purple-400 transition-colors duration-200"
                  >
                    {Icon && (
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    )}
                    <span className="text-sm sm:text-[15px]">{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4 sm:mb-[20px] mt-6 sm:mt-[20px] text-sm sm:text-[15px] text-center px-4">
          &copy; Anirudh Singh Rathore {new Date().getFullYear()} Inc. All
          rights reserved.
        </div>
      </div>
    </div>
  );
};

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  interface Skili {
    skill_name: string;
    image: string;
    width: number;
    height: number;
    className?: string;
  }

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.95)" }} // Slightly smaller scale for mobile
      className="flex flex-col items-center justify-center gap-8 sm:gap-10 h-full relative overflow-hidden py-8 sm:py-10 px-4 sm:px-6"
    >
      <SkillText />

      {/* Languages */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2 text-center">
          Languages
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-7xl">
          {SKILL_DATA.map((skill: Skili, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
              className={skill.className}
            />
          ))}
        </div>
      </div>

      {/* Frontend Frameworks */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2 text-center">
          Frontend Frameworks
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-7xl">
          {FRONTEND_SKILL.map((skill: Skili, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
              className={skill.className}
            />
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2 text-center">
          Backend
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-7xl">
          {BACKEND_SKILL.map((skill: Skili, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
              className={skill.className}
            />
          ))}
        </div>
      </div>

      {/* Fullstack */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2 text-center">
          Fullstack
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 max-w-7xl">
          {FULLSTACK_SKILL.map((skill: Skili, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
              className={skill.className}
            />
          ))}
        </div>
      </div>

      {/* Tools / Others */}
      <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2 text-center">
          Tools & Others
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-7xl">
          {OTHER_SKILL.map((skill: Skili, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
              className={skill.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

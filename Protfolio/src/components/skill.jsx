import { skills } from "@/common/data";

export default function SkillsSection() {

  return (
    <div className=" bg-white dark:bg-zinc-950 text-black dark:text-white py-16 mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-zinc-900 dark:text-white text-5xl font-bold text-center mb-14">
          <b>SKILLS</b>
        </h1>
        <div className="space-y-12">
          {skills.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center items-center gap-8 flex-wrap"
            >
              {row.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-9 h-9 object-contain"
                  />
                  <span className="text-xl lg:text-2xl font-serif">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

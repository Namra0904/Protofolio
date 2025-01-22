export default function SkillsSection() {
  const skills = [
    // Row 1
    [
      {
        name: "HTML",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736655139/culfw7sbt1mmeepicqpc.png",
      },
      {
        name: "CSS",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736655188/i9k60tvclpsqxbtpxymp.png",
      },
      {
        name: "JavaScript",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736655687/sonlgiupoceylzqqddla.png",
      },
      {
        name: "TypeScript",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736656018/klrv5sunvwgy5tbykjrl.png",
      },
      {
        name: "Node",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
    // Row 2
    [
      {
        name: "Django",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736654721/yns5uvuu6aab1qvbio7x.png",
      },
      {
        name: "React",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736655275/ddqlhmirz7orxinl24mc.png",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736656129/yvfgrk7rz5hhpz8rqfqq.png",
      },
    ],
    // Row 3
    [
      {
        name: "MongoDB",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736657873/kajfxnai6jpgifco0ppq.png",
      },
      {
        name: "PostgreSQL",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736658521/csnlptxlmhmtogpixwge.png",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Github",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736658907/bmpb4voiissrpypbcrkq.png",
      },
    ],
  ];

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

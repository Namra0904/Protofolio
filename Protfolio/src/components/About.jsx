import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 px-4 relative">
      <h1 className="text-black dark:text-white text-5xl font-bold text-center mb-14">
        <b>ABOUT ME</b>
      </h1>
      <div className="max-w-7xl mx-auto relative">
        <Card className="mb-8 dark:bg-zinc-900 border-0">
          <CardContent className="">
            <p className="text-gray-800 dark:text-gray-300  text-lg ">
              Hi, I’m Namra Mevada, and I’ve loved technology since I was young.
              I started coding when I first learned about it, and I’ve been
              passionate about it ever since. Once I realized how much I could
              create with just a few lines of code, it sparked my curiosity to
              learn more.
            </p>
            <p className="text-gray-800 dark:text-gray-300 text-lg mt-12">
              What makes me unique is my curiosity and passion for understanding
              how things work. I don’t just want to learn the basics – I want to
              know the details. I love solving problems and always look for new
              challenges. I take pride in writing clean, efficient code that’s
              easy to maintain and improve. My goal is to write code that works
              well and performs at its best. Whether I’m learning new skills,
              exploring new technologies, or working with others, I’m always
              excited to learn more about computer science.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
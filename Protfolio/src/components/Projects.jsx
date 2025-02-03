import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import PropTypes from "prop-types";
import { projects } from "@/common/data";

function ProjectCard({ project }) {
  return (
    <Card className="bg-white border-0 dark:bg-zinc-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
      <CardHeader className="flex items-center gap-4 p-6">
        <CardTitle className="text-2xl font-semibold text-black dark:text-white mb-1">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700 dark:text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="border-0 text-gray-700 dark:text-gray-300 mt-4 dark:bg-zinc-700 dark:hover:bg-zinc-600 hover:bg-gray-200"
          asChild
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Github className="w-5 h-5 mr-0" />
            View Source
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default function ProjectsShowcase() {
  return (
    <div className="w-full dark:bg-zinc-950 mb-8 px-8 py-10">
      <h1 className="text-gray-900 dark:text-white text-5xl font-bold text-center mb-14">
        <b>PROJECTS</b>
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
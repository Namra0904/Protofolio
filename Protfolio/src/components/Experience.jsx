import { memo, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Calendar, Building2, Clock } from "lucide-react";

// Memoized ExperienceItem component to prevent unnecessary re-renders
const ExperienceItem = memo(({ exp }) => (
  <div className="relative mb-12">
    <Card className="md:ml-0 group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
      <CardContent className="p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
          <div className="relative">
            <img
              src={exp.logo}
              width={64}
              height={64}
              className="h-16 w-16 rounded-xl shadow-lg ring-2 ring-white dark:ring-zinc-800"
              alt={exp.company}
              loading="lazy"
              decoding="async"
            />
            {exp.current && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-zinc-900 animate-pulse" />
            )}
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {exp.title}
              </h2>
              {exp.current && (
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-800">
                  Current
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 mb-3">
              <Building2 className="h-4 w-4" />
              <span className="font-medium">{exp.company}</span>
              <span>•</span>
              <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
                {exp.type}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{exp.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{exp.workType}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            Key Responsibilities
          </h3>
          <ul className="space-y-3">
            {exp.responsibilities.map((responsibility, idx) => (
              <li
                key={`resp-${idx}`}
                className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300"
              >
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, idx) => (
              <Badge
                key={`tech-${idx}`}
                variant="secondary"
                className="bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Company Website */}
        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
          <a
            href={exp.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 group"
          >
            <span>Visit Company Website</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  </div>
));

ExperienceItem.displayName = "ExperienceItem";

const Experience = () => {
  // Memoize experiences data to prevent recreation on every render
  const experiences = useMemo(
    () => [
      {
        id: 1,
        title: "Junior NodeJS Developer",
        company: "Saturncube Technology",
        type: "Full-time",
        duration: "June 2025 - Present",
        location: "Ahmedabad, India",
        workType: "On-Site",
        logo: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736673504/orkefyfw4fncuutkxxuz.png",
        responsibilities: [
          "Developed and maintained scalable backend services using Node.js, Express.js, and MongoDB for multiple live production web applications",
          "Built and integrated RESTful APIs for core functionalities including user authentication, data transactions, and business logic workflows",
          "Implemented secure JWT-based authentication, role-based access control, and rate limiting mechanisms",
          "Integrated and managed Stripe Payment Gateway including automated payout system",
          "Engineered booking logic with timezone-aware slot and availability calculations",
          "Designed and optimized complex MongoDB aggregations and indexing strategies",
          "Structured clean backend architecture with modular routing and middleware",
          "Collaborated closely with frontend teams (React/Next.js) for seamless API integration",
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "Web Development"],
        website: "https://www.saturncube.com/",
        current: true,
      },
      {
        id: 2,
        title: "NodeJS Developer Intern",
        company: "Saturncube Technology",
        type: "Internship",
        duration: "December 2024 - June 2025",
        location: "Ahmedabad, India",
        workType: "On-Site",
        logo: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736673504/orkefyfw4fncuutkxxuz.png",
        responsibilities: [
          "Assisted in developing backend services using Node.js, Express.js, and MongoDB",
          "Supported RESTful API development for user authentication and business logic",
          "Helped implement JWT authentication and basic access control mechanisms",
          "Contributed to Stripe integration for payment processing",
          "Researched and implemented Google Wallet Pass and Apple Wallet Pass integration",
          "Worked on MongoDB queries and basic database optimizations",
          "Assisted in developing booking system logic for timezone handling",
          "Collaborated with frontend teams for API testing and integration",
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "Web Development"],
        website: "https://www.saturncube.com/",
        current: false,
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-950 py-16">
      <div className="px-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent mb-4">
            Experience
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            My professional journey in backend development with Node.js
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

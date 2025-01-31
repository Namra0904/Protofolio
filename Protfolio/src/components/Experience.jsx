import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white py-16">
      <div className="px-4">
        <h1 className="text-zinc-900 dark:text-white text-5xl font-bold text-center mb-8">
          <b>Experience</b>
        </h1>
        <div className="max-w-7xl mx-auto relative">
          <Card className="mb-8 dark:bg-zinc-900 border-0">
            <CardContent className="p-6 space-y-6">
              {/* Logo and Title Section */}
              <div className="space-y-4">
                {/* <div className="w-16 h-16 bg-blue-700 text-white flex items-center justify-center rounded-lg">
                  <span className="text-lg font-medium">H/DS</span>
                </div> */}
                <img
                  src="https://res.cloudinary.com/dffsbxpp4/image/upload/v1736673504/orkefyfw4fncuutkxxuz.png"
                  className="h-16 w-16"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    Backend Developer Intern
                  </h2>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                    <span>Saturncube Technologies</span>
                    <span>•</span>
                    <span>Internship</span>
                  </div>
                </div>
              </div>

              {/* Duration and Location */}
              <div className="space-y-1 text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span>December 2024 - Present</span>
                  <span>•</span>
                  <span>3 Mos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Ahmedabad</span>
                  <span>•</span>
                  <span>On-Site</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Develop APIs using Node.js to support different business tasks
                and make sure they work smoothly with the frontend. Built
                RESTful services for user login, data fetching, and processing.
                Used Express.js to manage routes, handle errors, and add extra
                features. Made sure the APIs are secure by using JWT for
                authentication and limiting request rates. Ensured the data is
                consistent and fast by working with MongoDB. Tested and fixed
                issues to ensure the code is reliable and scalable.
              </p>

              {/* Skills Section */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 text-gray-700 dark:text-gray-300"
                  >
                    Node JS
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 text-gray-700 dark:text-gray-300"
                  >
                    Web Development
                  </Badge>
                </div>
              </div>

              {/* Company Website */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  Company Website
                </h3>
                <a
                  href="https://www.saturncube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 flex items-center gap-2 w-fit"
                >
                  https://www.saturncube.com/
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;

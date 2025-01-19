import * as React from "react";
import { useState, useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    id: 1,
    projectName: "Chat-Pulse",
    projectDescription:
      "A real-time chat application using the MERN stack, featuring secure JWT authentication, one-on-one and group chats, and WebSocket (Socket.io) integration.",
    projectLink: "https://github.com/Namra0904/Chat_Pulse",
    projectUrl:
      "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736787619/mcdcc73skh3qqkxym2sd.png",
  },
  {
    id: 2,
    projectName: "Aarogyam",
    projectDescription:
      "Developed a healthcare platform for appointment scheduling, medical record management, and medication tracking for Admin, Hospital, Doctor, and Patient roles.",
    projectLink: "https://github.com/Namra0904/Aarogyam",
    projectUrl:
      "https://res.cloudinary.com/dffsbxpp4/image/upload/v1737296474/v3hlpdeu6indvryi3qjh.jpg",
  },
  {
    id: 3,
    projectName: "Network",
    projectDescription:
      "Developed a full-stack social app with Django and React.js, featuring posts, likes, comments, profiles, following, and username search.",
    projectLink: "https://github.com/Namra0904/Network",
    projectUrl:
      "https://res.cloudinary.com/dffsbxpp4/image/upload/v1737295622/d0gpb9rjui2yig5vzthq.png",
  },
  {
    id: 4,
    projectName: "Bus Route Navigator",
    projectDescription:
      "Created a console-based map navigator in Java using Dijkstra's algorithm to find the shortest path between locations, allowing user interaction for selecting start and end points to calculate the fastest route.",
    projectLink: "https://github.com/Namra0904/Bus_Route_Navigator",
    projectUrl:
      "https://res.cloudinary.com/dffsbxpp4/image/upload/v1737296146/tnh57a33exgupzhsx4n6.png",
  },
];

export default function ProjectsShowcase() {
  const carouselRef = useRef(null); // Reference for Carousel navigation
  const [expandedId, setExpandedId] = useState(null); // Track which accordion is expanded

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id); // Toggle the accordion for the selected project
  };

  return (
    <div className="w-full dark:bg-zinc-900 mb-8 px-8 py-10">
      <h1 className="text-zinc-900 dark:text-white text-5xl font-bold text-center mb-14">
        <b>PROJECTS</b>
      </h1>
      <div className="flex justify-center items-center lg:max-w-5xl md:max-w-xl mx-auto">
        <Carousel
          ref={carouselRef}
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="snap-start basis-full md:basis-1/3"
              >
                <div className="p-2">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="relative bg-white dark:bg-zinc-900 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer border-0">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <div className="w-full h-36 mb-4">
                          {/* Increased height */}
                          <img
                            src={project.projectUrl}
                            alt={project.projectName}
                            className="w-full h-full object-contain " // Use object-cover for better cropping
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white font-serif">
                          {project.projectName}
                        </h3>
                        <button
                          className="text-zinc-600 dark:text-zinc-300 mt-2 text-sm hover:underline"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleAccordion(project.id);
                          }}
                        >
                          {expandedId === project.id
                            ? "Hide Description"
                            : "Show Description"}
                        </button>
                        {expandedId === project.id && (
                          <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-center">
                            {project.projectDescription}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Previous Button */}
          <CarouselPrevious className="ms-4 sm:ms-0 bg-zinc-200 dark:bg-zinc-700 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors ml-[41px] lg:ml-0" />
          {/* Next Button */}
          <CarouselNext className="me-4 sm:me-0 bg-zinc-200 dark:bg-zinc-700 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors mr-[40px] lg:mr-0" />
        </Carousel>
      </div>
    </div>
  );
}

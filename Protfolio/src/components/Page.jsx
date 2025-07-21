import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import ProjectsShowcase from "@/components/Projects";
import About from "@/components/About";
import SkillsSection from "@/components/skill";
import Experience from "@/components/Experience";
import GetInTouch from "@/components/GetInTouch";

export default function Page() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true); // Show the button after scrolling 200px
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white">
      {/* Main Content */}
      <main className="container mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10 mb-14">
        <div className="grid w-full gap-8 md:grid-cols-2">
          {/* Image */}
          <div className="order-1 flex items-center justify-center md:order-2 me-0 lg:me-28">
            <div className="aspect-square w-60 overflow-hidden rounded-full sm:w-72 md:w-80">
              {/* Theme Toggle */}
              <div className="absolute top-4 right-4 md:top-20 md:right-52 z-50">
                <ThemeToggle />
              </div>
              <img
                src="https://res.cloudinary.com/dffsbxpp4/image/upload/v1736659528/ozy4uwwobmmtgnqeko7l.webp"
                alt="Profile illustration"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 flex flex-col items-center text-center md:order-1 ms-0 lg:ms-24">
            <h1 className="mb-1 mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-5xl">
              <b>NAMRA</b>
            </h1>
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-5xl">
              <b>MEVADA</b>
            </h1>
            <h2 className="mb-7 mt-3 text-xl sm:text-5xl lg:text-3xl font-medium text-zinc-700 dark:text-zinc-300">
              <b>FULL STACK DEVELOPER</b>
            </h2>

            {/* Social Links */}
            <div className="mb-6 flex gap-6">
              <a
                href="mailto:namramevada@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-zinc-700 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-white"
              >
                <Mail className="h-7 w-7" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://github.com/Namra0904"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-zinc-700 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-white"
              >
                <Github className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/namra-mevada-5658092a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-zinc-700 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-white"
              >
                <Linkedin className="h-7 w-7" />

                <span className="sr-only">LinkedIn</span>
              </a>
            </div>

            <p className="mb-6 text-xl max-w-md text-zinc-700 dark:text-white font-semibold">
              Passionate about building scalable, high-performance backend
              systems with Node.js and crafting dynamic, responsive user
              interfaces with React for modern businesses.
            </p>
            <a
              href="https://drive.google.com/file/d/1HhdHQZ46LArv24OsgbB1hLcfS5V8kxQd/view?usp=drive_link"
              target="_blank"
            >
              <Button
                size="lg"
                className="font-bold text-xl rounded-full transition-transform hover:scale-105 
             bg-blue-600 text-white hover:bg-blue-700 
             dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Resume
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* About section */}
      <About />
      {/* Experience section */}
      <Experience />
      {/* Project section */}
      <ProjectsShowcase />
      {/* skill section */}
      <SkillsSection />
      {/* Get In Touch section */}
      <GetInTouch />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 w-10 h-10 flex items-center justify-center p-3 rounded-full shadow-md 
        bg-white text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 transition-all text-2xl"
        >
          ↑
        </button>
      )}

      {/* footer section */}
      <footer className="w-full py-4  text-center text-zinc-700 dark:text-zinc-300">
        <p>© 2025 Namra Mevada. All rights reserved.</p>
      </footer>
    </div>
  );
}

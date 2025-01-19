import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full border-0 bg-background-0 hover:bg-background-0"
    >
      {theme === "dark" ? (
        // <Moon size={32} className="text-zinc-200" />
        <FontAwesomeIcon icon={faMoon} style={{ color: "#ffffff" }} />
      ) : (
        <FontAwesomeIcon icon={faSun} style={{ color: "#000000" }} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}


import { Link } from "react-router";
import { Button } from "flowbite-react";
import { useState } from "react";
import { getThemeMode } from "../utils/theme-mode";
export default function Header() {
  const [theme, setTheme] = useState(getThemeMode());

  function handleThemeChange() {
    setTheme((prevTheme: string) => {
      document.documentElement.classList.toggle("dark", prevTheme === "dark");
      if (prevTheme === "dark") {
        localStorage.setItem("theme", "light");
        localStorage.setItem("flowbite-theme-mode", "light");
        return "light";
      } else {
        localStorage.setItem("theme", "dark");
        localStorage.setItem("flowbite-theme-mode", "dark");
        return "dark";
      }
    });
  }
  return (
    <header className="sticky top-0 z-10 container overflow-hidden">
      <div className="flex items-center justify-between gap-15 rounded-xl border border-gray-200/50 bg-gray-200/50 p-4 backdrop-blur-lg dark:border-gray-800/10 dark:bg-gray-500/50">
        <Link to="/" className="h-[56px] w-[56px]">
          <img src="../logo.png" className="rounded-xl" />
        </Link>

        <div className="flex items-center justify-around gap-15">
          <Link to="/projects">
            <p>Projects</p>
          </Link>
          {/* <div>Skills</div>
          <div>Resume</div> */}
          {/* TODO: dark mode ? */}
          <Button outline color="green" onClick={handleThemeChange} size="sm">
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}

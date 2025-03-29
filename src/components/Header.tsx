import { useCallback, useState } from "react";
import GithubBlack from "../assets/github-mark.png";
import GithubWhite from "../assets/github-mark-white.png";
import LinkedinBlack from "../assets/LI-In-Bug.png";
import LinkedinWhite from "../assets/InBug-White.png";
import { DarkModeToggle } from "./DarkModeToggle";

export const Header = () => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(
    document.querySelector("html")?.classList.contains("light")
      ? "light"
      : "dark"
  );
  const toggleMode = useCallback(() => {
    const present = document.querySelector("html")?.classList.toggle("dark");
    setColorScheme(present ? "dark" : "light");
  }, []);

  const toTop = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <header className="h-16 bg-custom-5 dark:bg-custom-1 text-custom-10 sticky top-0 z-10">
      <nav className="flex justify-between items-center h-full">
        <span>
          <h2 className="text-xl ml-3.5">Leo's Profolio</h2>
        </span>
        <span className="w-2/10">
          <ul className="flex justify-evenly">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer" onClick={toTop}>
              About Me
            </li>
          </ul>
        </span>
        <span className="mr-3.5 w-2/26">
          <ul className="flex justify-evenly items-center">
            <li>
              <a target="_blank" href="https://github.com/TheLox95">
                <img
                  className="w-8"
                  src={colorScheme === "light" ? GithubBlack : GithubWhite}
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/leonardo-borjas-897ba2129/"
              >
                <img
                  className="w-8"
                  src={colorScheme === "light" ? LinkedinBlack : LinkedinWhite}
                />
              </a>
            </li>
            <li>
              <DarkModeToggle
                initialVal={colorScheme === "light"}
                onChange={toggleMode}
              />
            </li>
          </ul>
        </span>
      </nav>
    </header>
  );
};

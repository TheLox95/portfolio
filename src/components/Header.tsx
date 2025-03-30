import { useCallback, useContext } from "react";
import GithubBlack from "../assets/github-mark.png";
import GithubWhite from "../assets/github-mark-white.png";
import LinkedinBlack from "../assets/LI-In-Bug.png";
import LinkedinWhite from "../assets/InBug-White.png";
import { DarkModeToggle } from "./DarkModeToggle";
import { SideMenuContext } from "../hooks/useSidebarContext";
import { DarkModeContext } from "../hooks/useDarkModeContext";

export const Header = () => {
  const sidebarContext = useContext(SideMenuContext);
  const darkmodeContext = useContext(DarkModeContext);

  const toTop = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <header className="h-16 bg-custom-5 dark:bg-custom-1 text-custom-10 sticky top-0 z-10">
      <nav className="flex justify-between items-center h-full flex-wrap">
        <span className="w-full sm:w-auto">
          <h2 className="text-xl sm:ml-3.5 text-center sm:text-left">
            Leo's Portfolio
          </h2>
        </span>

        <button
          onClick={sidebarContext.toggle}
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="sm:hidden absolute inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <span className="w-2/10 hidden sm:inline">
          <ul className="flex justify-evenly">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer" onClick={toTop}>
              About Me
            </li>
          </ul>
        </span>
        <span className="mr-3.5 w-2/26 hidden sm:inline">
          <ul className="hidden sm:flex justify-evenly items-center">
            <li>
              <a target="_blank" href="https://github.com/TheLox95">
                <img
                  className="w-8"
                  src={
                    darkmodeContext.mode === "light" ? GithubBlack : GithubWhite
                  }
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
                  src={
                    darkmodeContext.mode === "light"
                      ? LinkedinBlack
                      : LinkedinWhite
                  }
                />
              </a>
            </li>
            <li>
              <DarkModeToggle
                val={darkmodeContext.mode}
                onChange={darkmodeContext.toggle}
              />
            </li>
          </ul>
        </span>
      </nav>
    </header>
  );
};

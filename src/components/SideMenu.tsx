import clsx from "clsx";
import { useCallback, useContext } from "react";
import { SideMenuContext } from "../hooks/useSidebarContext";
import { DarkModeToggle } from "./DarkModeToggle";
import { DarkModeContext } from "../hooks/useDarkModeContext";

export const SideMenu = () => {
  const sidebarContext = useContext(SideMenuContext);
  const darkmodeContext = useContext(DarkModeContext);

  const toTop = useCallback(() => {
    window.scrollTo({ top: 0 });
    sidebarContext.toggle();
  }, []);

  return (
    <>
      <div
        id="drawer-navigation"
        className={clsx(
          "fixed top-0 left-0 z-40 w-64 h-screen overflow-y-auto transition-transform bg-custom-8 dark:bg-gray-800 dark:text-white",
          sidebarContext.show ? "transform-none" : "-translate-x-full"
        )}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="bg-custom-10 dark:bg-gray-800 p-4 w-full">
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold uppercase text-custom-11 text-white/90 dark:text-gray-400"
          >
            Menu
          </h5>
        </div>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            onClick={sidebarContext.toggle}
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto text-custom-11 pl-4">
          <ul className="space-y-2 font-medium">
            <li>
              <a onClick={sidebarContext.toggle} href="#projects">
                Projects
              </a>
            </li>
            <li className="cursor-pointer" onClick={toTop}>
              About Me
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                onClick={sidebarContext.toggle}
                className="flex items-center"
                target="_blank"
                href="https://github.com/TheLox95"
              >
                Github
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    fill="currentColor"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path>
                  </svg>
                </span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                onClick={sidebarContext.toggle}
                className="flex items-center"
                target="_blank"
                href="https://www.linkedin.com/in/leonardo-borjas-897ba2129/"
              >
                LinkedIn{" "}
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    fill="currentColor"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <DarkModeToggle
                val={darkmodeContext.mode}
                onChange={darkmodeContext.toggle}
              />
            </li>
          </ul>
        </div>
      </div>
      {sidebarContext.show ? (
        <div
          onClick={sidebarContext.toggle}
          drawer-backdrop=""
          className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30"
        ></div>
      ) : undefined}
    </>
  );
};

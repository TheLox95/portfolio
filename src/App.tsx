import { Header } from "./components/Header";
import projects from "./data/projects.json";
import LandImg from "./assets/land.jpeg";
import { ProjectCard } from "./components/ProjectCard";
import { SideMenu } from "./components/SideMenu";
import { SideMenuContext } from "./hooks/useSidebarContext";
import { FC, useCallback, useState } from "react";
import { DarkModeContext } from "./hooks/useDarkModeContext";

const fontSkills = [
  "ReactJS",
  "NextJS",
  "Typescript",
  "MaterialUI",
  "Ant Design",
  "Styled Components",
  "Bootstrap",
  "Sass",
  "Css",
  "Formik",
  "React Hook Form",
  "Redux",
  "i18next",
  "Jest",
  "Vitest",
  "Cypress",
  "Playwright",
];
const backSkills = [
  "NodeJS",
  "Typescript",
  "Yup",
  "Sequelize",
  "KnexJS",
  "OpenAPI",
  "Nginx",
  "Docker",
  "AWS",
  "Google Cloud",
  "Digital Ocean",
];

const AppContextProvider: FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [sidebarState, setSidebarState] = useState({ show: false });

  const [colorScheme, setColorScheme] = useState<"light" | "dark">(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? "dark"
      : "light"
  );
  const toggleDarkmode = useCallback(() => {
    const present = document.querySelector("html")?.classList.toggle("dark");
    setColorScheme(present ? "dark" : "light");
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarState((prev) => ({ show: !prev.show }));
  }, []);

  return (
    <SideMenuContext.Provider
      value={{
        ...sidebarState,
        toggle: toggleSidebar,
      }}
    >
      <DarkModeContext.Provider
        value={{ mode: colorScheme, toggle: toggleDarkmode }}
      >
        {children}
      </DarkModeContext.Provider>
    </SideMenuContext.Provider>
  );
};

function App() {
  return (
    <AppContextProvider>
      <Header />
      <SideMenu />
      <main
        id="about-me"
        className="bg-custom-2/40 dark:bg-custom-3 dark:text-white"
      >
        <section>
          <h1 className="text-4xl text-center text-custom-10 italic pt-8 pb-15">
            Hi, I'm <span className="font-bold">Leonardo</span> and welcome to
            my profile
          </h1>
          <img
            className="h-80 w-80 rounded-full ml-auto mr-auto mb-10"
            src={LandImg}
            alt="Leo's portfolio"
          />
          <div className="flex justify-around mb-8 flex-wrap px-5 sm:px-0">
            <section className="sm:w-2/5 w-full text-justify sm:text-left">
              <p className="text-xl font-bold mb-4">
                I'm a fullstack web developer from Venezuela and for the past 4
                years I have been working daily building and maintaining
                frontend and backend applications using the MEAN stack.
              </p>
              <p>
                I have translated business requirements and logic into code and
                implemented websites with React using designs from Figma and
                other sites alike, all of them going from small apps to long
                term projects that have lasted more than 1 year. I have worked
                closely with teams around the world remotely. I have followed
                Agile development, dev/staging/prod test cycle, issues and pull
                requests, all on Github, Bitbucket and Gitlab.
              </p>
            </section>
            <section className="sm:w-2/5 w-full mt-4 sm:mt-0">
              <h1 className="text-2xl text-custom-9 font-bold text-center sm:text-left">
                My Stack ⭐
              </h1>
              <section>
                <h5 className="italic text-sm underline decoration-accent-1-6/40 decoration-2 underline-offset-4 text-accent-1-8/80 dark:text-accent-1-4/80 font-bold">
                  Frontend
                </h5>
                <ul className="flex flex-wrap mt-1 justify-around sm:justify-normal">
                  {fontSkills.map((i) => (
                    <li
                      key={i}
                      className="mr-1.5 mb-1 p-1 bg-accent-1-6/50 rounded-xl"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h5 className="italic text-sm underline decoration-accent-2-6 decoration-2 underline-offset-4 text-accent-2-10/80 dark:text-accent-2-4/80 font-bold">
                  Backend
                </h5>
                <ul className="flex flex-wrap mt-1 justify-around sm:justify-normal">
                  {backSkills.map((i) => (
                    <li
                      key={i}
                      className="mr-1.5 mb-1 p-1 bg-accent-2-6 rounded-xl"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          </div>
        </section>
        <section className="bg-custom-4">
          <h2
            id="projects"
            className="text-center text-3xl pb-6 pt-4 text-custom-10 font-bold"
          >
            Projects 💼
          </h2>
          <div className="flex justify-around flex-wrap">
            {projects.map((p) => {
              return <ProjectCard key={p.title} {...p} />;
            })}
          </div>
        </section>
      </main>
    </AppContextProvider>
  );
}

export default App;

import { createContext } from "react";

export const DarkModeContext = createContext<{ mode: "light" | "dark", toggle: () => void}>({
  mode: document.querySelector("html")?.classList.contains("light")
    ? "light"
    : "dark",
    toggle: () => {}
});

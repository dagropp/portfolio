import {createContext} from "react";

interface AppContextProps {
  theme: AppTheme;
  setTheme(theme: AppTheme): void;
}

const AppContext = createContext<AppContextProps>({
  theme: "light",
  setTheme(theme: AppTheme) {}
})

export default AppContext;
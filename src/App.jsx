import { useContext } from "react";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./Context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Contact />
    </div>
  );
};

export default App;

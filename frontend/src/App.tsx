import { useState } from "react";
import MainHeader from "./components/MainHeader";
import classNames from "classnames";
import "./css/App.css";
import ModeButton from "./components/ModeButton";
import InfoCardOne from "./components/InfoCardOne";
import InfoCardTwo from "./components/InfoCardTwo";
import TaskListParent from "./components/TaskListParent";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const appClassNames = classNames("app-container", {
    "dark-mode": isDarkMode,
    "light-mode": !isDarkMode,
  });

  return (
    <div className={appClassNames}>
      <div className="items-container">
        <MainHeader />
        <hr className="solid" />
        <ModeButton
          onClick={() => setDarkMode(!isDarkMode)}
        />
        <TaskListParent/>
        <hr className="vertical-divider" />
        <InfoCardOne />
        <InfoCardTwo />
      </div>
    </div>
  );
};

export default App;

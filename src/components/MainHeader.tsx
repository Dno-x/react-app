import "../css/App.css";
import "../css/TitleDecor.css";
const MainHeader = () => {
  return (
    <div className="heading-container">
      <div className="loader">
        <div className="cube">
          <div className="side front"></div>
          <div className="side back"></div>
          <div className="side top"></div>
          <div className="side bottom"></div>
          <div className="side left"></div>
          <div className="side right"></div>
        </div>
      </div>
      <h1 className="main-header">Time Sync</h1>
      <h3 className="side-header">
        {"\u3000"}- Your Productivity Ally
      </h3>
    </div>
  );
};

export default MainHeader;

import "../css/InfoCardOne.css";

const InfoCardOne = () => {
  return (
    <div className="e-card1 playing">
      <div className="image"></div>
      <div className="wave1"></div>
      <div className="wave1"></div>
      <div className="wave1"></div>
      <div className="infotop">
        <p style={{ fontFamily: "monospace" }}>
          “ Time is what we want most, but what we use worst. ”
        </p>
        <div className="name">- William Penn</div>
      </div>
    </div>
  );
};

export default InfoCardOne;

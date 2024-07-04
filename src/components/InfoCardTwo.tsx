import "../css/InfoCardTwo.css";

const InfoCardTwo = () => {
  return (
    <div className="e-card2 playing">
      <div className="image"></div>
      <div className="wave2"></div>
      <div className="wave2"></div>
      <div className="wave2"></div>
      <div className="infotop">
        <p style={{ fontFamily: "monospace" }}>
          “ Lost time is never found again. ”
        </p>
        <div className="name">- Benjamin Franklin</div>
      </div>
    </div>
  );
};

export default InfoCardTwo;

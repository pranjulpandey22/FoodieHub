import "../css/Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image"></div>

            <div className="shimmer-title"></div>

            <div className="shimmer-text"></div>

            <div className="shimmer-text short"></div>

            <div className="shimmer-text"></div>

            <div className="shimmer-text small"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

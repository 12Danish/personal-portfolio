const Stars = ({ count = 40 }) => {
  return (
    <div className="falling-stars">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="star"></div>
      ))}
    </div>
  );
};

export default Stars;

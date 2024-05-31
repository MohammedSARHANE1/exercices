function TimerComponent({ seconds }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div
      style={
        seconds !== 0
          ? style
          : { ...style, backgroundColor: "red", height: "3rem" }
      }
    >
      {seconds !== 0 ? (
        formatTime(seconds)
      ) : (
        <p style={{ backgroundColor: "red" }}>Time's up!</p>
      )}
    </div>
  );
}

const style = {
  height: "2rem",
  width: "3rem",
  backgroundColor: "#2d9618",
  borderRadius: "5px",
  display: "grid",
  justifyContent: "center",
   alignItems: "center"
};

export default TimerComponent;
// src/CountdownTimer.js

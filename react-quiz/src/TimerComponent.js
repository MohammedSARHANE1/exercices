

function TimerComponent({seconds}) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div >
      <p >{formatTime(seconds)}</p>
      {seconds === 0 && <p >Time's up!</p>}
    </div>
  );
}



export default TimerComponent;
// src/CountdownTimer.js



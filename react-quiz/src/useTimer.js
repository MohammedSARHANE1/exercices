import { useEffect,useState } from "react";

export default function useTimer(initialSeconds) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      // Cleanup function to clear the timeout if the component unmounts or the seconds change
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  return seconds;
};


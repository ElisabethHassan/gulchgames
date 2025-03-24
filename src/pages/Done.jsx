import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Done() {
    const [timeLeft, setTimeLeft] = useState(20); // 20-second countdown
    const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate("/"); // Auto-start workout when timer reaches 0
    }
  }, [timeLeft, navigate]);

    return (    
        <div className="wrapper">
            <h1>All set!</h1>
            <p>Your workout will begin in 20 seconds. Get to a starting bubble before the timer runs out.</p>
            <h2>Starting in: {timeLeft} seconds</h2>
            {/* <h2>{timeLeft}</h2> */}
            <p>Need more time? <button onClick={() => setTimeLeft(timeLeft + 10)}>Add 10 More Seconds</button></p>

            {/* TODO: fix this */}
            {/* <button onClick={handleConfirm}>Pause Workout</button> */}
            <button onClick={() => navigate("/")}>Exit Workout</button>
   
        
        </div>
          
    );


}
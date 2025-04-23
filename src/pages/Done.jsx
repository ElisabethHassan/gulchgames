import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";
import '../styles/Home.css';

export default function Done() {
    const [timeLeft, setTimeLeft] = useState(10);
    const navigate = useNavigate();
    const { formData } = useForm();
    const selectedWorkout = formData.workoutType;
    localStorage.setItem("workoutType", formData.workoutType); 


    const videos = {
        "HIIT Tabata": { wall: "/videos/hiit_wall.mp4", floor: "/videos/hiit_floor.mp4" },
        "Warmup": { wall: "/videos/warmup_wall.mp4", floor: "/videos/warmup_floor.mp4" },
    };

    const handleExitWorkout = () => {
      // Change route in main window
      navigate("/")
    
      // Send message to the slideshow window
      const slideshowWindow = window.open('', 'SlideshowWindow');
      if (slideshowWindow) {
        slideshowWindow.postMessage(
          { type: "exitWorkout", page: "/" }, // use your default page path
          "*"
        );
        console.log("exit workout message has been received ")
      }
    };

    //logic for done to control workoutplayer time (pause and play)
    const pauseWorkout = () => {
        const slideshowWindow = window.open("", "SlideshowWindow");
        if (slideshowWindow && !slideshowWindow.closed) {
          slideshowWindow.postMessage("pause", "*");
        }
      };
      
      const resumeWorkout = () => {
        const slideshowWindow = window.open("", "SlideshowWindow");
        if (slideshowWindow && !slideshowWindow.closed) {
          slideshowWindow.postMessage("play", "*");
        }
      };

      const restartWorkout = () => {
        const slideshowWindow = window.open("", "SlideshowWindow");
        if (slideshowWindow && !slideshowWindow.closed) {
          slideshowWindow.postMessage("restart", "*");
        }
       
      }

      
      

    //causes the workout player to play when the timer ends 
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            if (!window.slideshowWindow || window.slideshowWindow.closed) {
                window.slideshowWindow = window.open(
                    "/workoutplayer",
                    "SlideshowWindow",
                    "width=1080,height=1080,left=0,top=0"
                );
            } else {
                window.slideshowWindow.focus();
                window.slideshowWindow.postMessage({ type: "startWorkout", page: "/workoutplayer" }, "*");
            }
            // startWorkout(); // Start videos when timer hits 0
        }
    }, [timeLeft]);



    return (    
        <div className="wrapper_done">
            <h1>All set!</h1>
            {/* <p className="large">Your workout will load on the wall in {timeLeft} seconds. <br/>Once loaded, click start to begin the workout.</p> */}
            <p className="large">Your workout will load on the wall in 10 seconds. <br/>Get to a starting bubble before the timer runs out.</p>
            <h2 className="timeleft">{timeLeft}</h2>
            {/* <button className="large" onClick={playVideo}>Start Workout</button>
            <p>Don't worry, you will have 20 seconds <br/>to get to your spot after you click start.</p> */}

            {/* should add if statment so if the window is alr loaded, can't click anymore */}
            <p>Need more time? <span className="time" onClick={() => setTimeLeft(timeLeft + 10)}>Add 10 More Seconds</span></p>

            <div className="button_container">
                <button onClick={handleExitWorkout}>Exit Workout</button>
                <button onClick={pauseWorkout}>Pause Workout</button>
                <button onClick={resumeWorkout}>Resume Workout</button>
                {/* <button onClick={restartWorkout}>Restart Workout</button> */}
            </div>
            
        </div>
    );
}

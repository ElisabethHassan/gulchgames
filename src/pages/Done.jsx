import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'


export default function Done() {
    const [timeLeft, setTimeLeft] = useState(20); // 20-second countdown
    const navigate = useNavigate();

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       navigate("/"); // Auto-start workout when timer reaches 0
//     }
//   }, [timeLeft, navigate]);

    const videos = {
        "HIIT Tabata": { wall: "../videos/hiit_wall.mov", floor: "../videos/hiit_floor.mov" },
        "Warmup": { wall: "/videos/warmup_wall.mp4", floor: "/videos/warmup_floor.mp4" },
    };


    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            startWorkout(); // Start videos when timer hits 0
        }
    }, [timeLeft]);


    const startWorkout = () => {
        const workoutVideos = videos[selectedWorkout];

        if (workoutVideos) {
            // Open video for wall projector
            const wallWindow = window.open(
                "/video",
                "WallProjector",
                "width=1920,height=1080,left=0,top=0"
            );
        
            if (wallWindow) {
                setTimeout(() => {
                    wallWindow.location = `/video?videoSrc=${workoutVideos.wall}&screenType=wall`;
                }, 500); // Delay to allow the window to initialize
            } else {
                console.error("Popup blocked! Allow popups for this site.");
            }



            // const wallWindow = window.open(
            //     "/video",
            //     "WallProjector",
            //     "width=1920,height=1080,left=0,top=0"
            // );
            // wallWindow.location = `/video?videoSrc=${workoutVideos.wall}&screenType=wall`;

            // Open video for floor projector
            // const floorWindow = window.open(
            //     "/video",
            //     "FloorProjector",
            //     "width=1920,height=1080,left=1920,top=0"
            // );
            // floorWindow.location = `/video?videoSrc=${workoutVideos.floor}&screenType=floor`;
        }

        navigate("/"); // Return to home after launching videos
    };

    return (    
        <div className="wrapper_done">
            <h1>All set!</h1>
            <p>Your workout will begin in 20 seconds. <br/>Get to a starting bubble before the timer runs out.</p>
            {/* <h2>Starting in: {timeLeft} seconds</h2> */}
            {/* <h2>Starting in:</h2> */}
            <h2 className="timeleft">{timeLeft}</h2>
            <p>Need more time? <span className="time" onClick={() => setTimeLeft(timeLeft + 10)}>Add 10 More Seconds</span></p>

            {/* {/TODO: fix this */}
            {/* <button onClick={handleConfirm}>Pause Workout</button> */}
            <button onClick={() => navigate("/")}>Exit Workout</button>
   
        
        </div>
          
    );


}
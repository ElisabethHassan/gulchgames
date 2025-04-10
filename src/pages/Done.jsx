import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";
import '../styles/Home.css';

export default function Done() {
    const [timeLeft, setTimeLeft] = useState(20);
    const navigate = useNavigate();
    const { formData } = useForm();
    const selectedWorkout = formData.workoutType;

    const videos = {
        "HIIT Tabata": { wall: "/videos/hiit_wall.mp4", floor: "/videos/hiit_floor.mp4" },
        "Warmup": { wall: "/videos/warmup_wall.mp4", floor: "/videos/warmup_floor.mp4" },
    };

    //logic for user to pause the video
    const pauseVideo = () => {
        const wallWindow = window.open("", "WallProjector"); // Get the wall video window
        const floorWindow = window.open("", "FloorProjector"); // Get the floor video window
    

        if (wallWindow && !wallWindow.closed) {
            wallWindow.postMessage("pause", "*");
        } else {
            console.warn("Window is not open.");
        }
        if (floorWindow && !floorWindow.closed) {
            floorWindow.postMessage("pause", "*");
        } else {
            console.warn("Window is not open.");
        }
    };
    
    // logic for user to play the video
    const playVideo = () => {
        const wallWindow = window.open("", "WallProjector");
        const floorWindow = window.open("", "FloorProjector");

        if (wallWindow && !wallWindow.closed) {
            wallWindow.postMessage("play", "*");
        } else {
            console.warn("Window is not open.");
        }
        if (floorWindow && !floorWindow.closed) {
            floorWindow.postMessage("play", "*");
        } else {
            console.warn("Window is not open.");
        }
    
    };

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            startWorkout(); // Start videos when timer hits 0
        }
    }, [timeLeft]);


    // plays the workout videos
    const startWorkout = () => {
        const workoutVideos = videos[selectedWorkout];
        // const workoutVideos = videos["HIIT Tabata"];

        console.log("Selected workout:", selectedWorkout);
        console.log("Workout videos:", videos);
        console.log("WorkoutVideos for selected:", workoutVideos);
        console.log("Opening video:", workoutVideos ? workoutVideos.wall : "No video found!");

        if (workoutVideos) {
            if (!window.wallWindow || window.wallWindow.closed) {
                window.wallWindow = window.open(
                    `/video?videoSrc=${workoutVideos.wall}&screenType=wall`,
                    "WallProjector",
                    "width=1920,height=1080,left=0,top=0"
                );
            }
        
            if (!window.floorWindow || window.floorWindow.closed) {
                window.floorWindow = window.open(
                    `/video?videoSrc=${workoutVideos.floor}&screenType=floor`,
                    "FloorProjector",
                    "width=1920,height=1080,left=1920,top=0"
                );
            }

        } else {
            console.error("Workout video not found!");
        }

        // navigate("/");
    };

    return (    
        <div className="wrapper_done">
            <h1>All set!</h1>
            <p>Your workout will begin in 20 seconds. <br/>Get to a starting bubble before the timer runs out.</p>
            <h2 className="timeleft">{timeLeft}</h2>
            <p>Need more time? <span className="time" onClick={() => setTimeLeft(timeLeft + 10)}>Add 10 More Seconds</span></p>

            <div className="button_container">
                <button onClick={() => navigate("/")}>Exit Workout</button>
                <button onClick={pauseVideo}>Pause Video</button>
                <button onClick={playVideo}>Start Video</button>
            </div>
            
        </div>
    );
}

import { useEffect, useState, useRef } from 'react';
import VideoGif from "../components/VideoGif"
import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import ConfettiExplosion from 'react-confetti-explosion';
import '../styles/Home.css'

const width = 1980;
const height = 1080;



const workoutMessages = [
  // "howdy"
  // "You're doing great!",
  // "Keep pushing!",
  // "Stay strong!",
  // "You got this!",
  // "Nice form!",
  // "Almost there!"
];

const restMessages = [
  "Nice work! Take a breather.",
  "Grab some water!",
  "Rest up – next one’s coming!",
  "High five a partner!",
  "You're crushing it!",
  "Complement a partner!"
];

// logic that causes the workouts to play
export default function WorkoutPlayer() {
  const [index, setIndex] = useState(0);
  const [isRest, setIsRest] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [remainingTime, setRemainingTime] = useState(20000);
  const [message, setMessage] = useState("");

  // variables used for pausing/restarting workout
  const startTimestampRef = useRef(null);
  const remainingTimeRef = useRef(remainingTime);
  const timerRef = useRef(null);
  const videoRef = useRef();
  const duration = isRest ? 10000 : 20000;

  const workouts = [
    { name: "Run Laps", gif: "/gifs/Run.gif"},
    { name: "Toe Touches", gif: "/gifs/Toe-Touch.gif"},
    { name: "Arm Circles", gif: "/gifs/Arm-Circles.gif"},
    { name: "Side Reaches", gif: "/gifs/OH-Side-Reaches.gif"},
    { name: "Frankensteins", gif: "/gifs/Frankensteins.gif"},
    { name: "Lunge + Twist", gif: "/gifs/Side-Lunge.gif"},
    { name: "Butt Kicks", gif: "/gifs/Butt-Kicks.gif"},
    { name: "Hip Openers", gif: "/gifs/Open-the-Gate.gif"},
    { name: "Hip Closers", gif: "/gifs/Open-the-Gate.gif"},
    { name: "Arm Swings", gif: "/gifs/Arm-Swings.gif"},
    { name: "Standing Twists", gif: "/gifs/Standing-Twists.gif"},
    { name: "Jumping Jacks", gif: "/gifs/Jumping-Jack.gif"}
];

const tabata_workouts = [
    { name: "Run Laps", gif: "/gifs/Run.gif"},
    { name: "Air Squat", gif: "/gifs/Squat.gif"},
    { name: "High Knees", gif: "/gifs/High-Knees.gif"},
    { name: "Jump Lunges", gif: "/gifs/Jump-Lunge.gif"},
    { name: "Push Ups", gif: "/gifs/Push-Up.gif"},
    { name: "Jumping Jacks", gif: "/gifs/Jumping-Jack.gif"},
    { name: "Side Lunges", gif: "/gifs/Side-Lunge.gif"},
    { name: "Burpees", gif: "/gifs/Burpee.gif"},
    { name: "Plank", gif: "/gifs/plank2.svg"},
    { name: "Punch Jacks", gif: "/gifs/Punch-Jacks.gif"},
    { name: "Burpees", gif: "/gifs/Burpee.gif"},
    { name: "Running", gif: "/gifs/Run.gif"}
];

  const restartWorkout = () => {
    clearTimeout(timerRef.current); // clear current timer
    setIndex(0);
    setIsRest(false);
    setIsFinished(false);
    setIsPaused(false);
    setRemainingTime(20000); // reset to full workout duration
    remainingTimeRef.current = 20000;
    startTimestampRef.current = null;
  
    // Optionally restart the video
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play(); // don't auto-play immediately
    }
  };
  
  //gets the workout that the user selected
  const selectedWorkout = localStorage.getItem("workoutType") || "Warmup";
    // console.log("formData:", formData);


  const navigate = useNavigate();

  //logic to exit the workout and go back to the original screen
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'exitWorkout') {
        console.log("Exit workout message received in WorkoutPlayer");
        navigate('/slideshow'); // or wherever the default screen is
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);


  //lets the done page control the pause and play
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === "pause") {
        if (!isPaused) togglePause();
      } else if (event.data === "play") {
        if (isPaused) togglePause();
      } else if (event.data === "restart") {
        restartWorkout(); 
      }
    };
  
    window.addEventListener("message", handleMessage);
  
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [isPaused]);

  //keeps track if the remaining time is for the rest or the current workout
  useEffect(() => {
    remainingTimeRef.current = remainingTime;
  }, [remainingTime]);

  //plays the timer videos
  useEffect(() => {
    if (isFinished || isPaused) return;

    // Start time tracking to handle pause and start
    startTimestampRef.current = Date.now();

    // Reset and play the correct timer video
    if (videoRef.current) {
      videoRef.current.currentTime = (duration - remainingTimeRef.current) / 1000;
      videoRef.current.play();
    }

    // pick a random encouraging message
  const getRandomMessage = () => {
    const list = isRest ? restMessages : workoutMessages;
    return list[Math.floor(Math.random() * list.length)];
  };

  setMessage(getRandomMessage());

    timerRef.current = setTimeout(() => {
      if (isRest) {
        if (index + 1 < workouts.length-1) {
          setIndex(index + 1);
          setIsRest(false);
          setRemainingTime(20000);
        } else {
          setIsFinished(true);
        }
      } else {
        setIsRest(true);
        setRemainingTime(10000);
      }
    }, remainingTimeRef.current);

    return () => clearTimeout(timerRef.current);
  }, [index, isRest, isPaused, isFinished]);


  const togglePause = () => {
    if (!isPaused) {
      clearTimeout(timerRef.current);

      const elapsed = Date.now() - startTimestampRef.current;
      const newRemaining = remainingTime - elapsed;
      setRemainingTime(newRemaining > 0 ? newRemaining : 0);

      if (videoRef.current) {
        videoRef.current.pause();
      }

      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  };

    

  if (isFinished) {
    return (
      <div className="finished">
        {/* <Confetti width={width} height={height} /> */}
        <h1>You crushed it!</h1>
        <h3>Take some time to stretch and cool down</h3>
        <div className='confetti_explosion'>
          <ConfettiExplosion
            // className='confetti_explosion'
            width={width}
            height={height}
            duration={6200}
            colors={['#E46B91', '#FBAF63', '#F2655B', '#5D80C0']}
            force={1.5}
          />
          </div>
       
        
      </div>
    );
  }

  if (!selectedWorkout) {
    return <div>Loading workout...</div>;
  }
  const workoutSelect = selectedWorkout === "HIIT Tabata" ? tabata_workouts : workouts


  const currentWorkout = workoutSelect[index];
  const nextWorkout = workoutSelect[index + 1];

  return (
    <div className={ "workout-container"}>
        <div className="workoutimage">
          <div className="encouragement">
            <h2 style={{ fontSize: '1.5rem', marginTop: '1rem' }}>{message}</h2>
          </div>


          {isRest ? (
          <>
            <h1 style={{ fontSize: '9.7rem', marginTop: "1.4rem", marginBottom: "",  color: "#5D80C0" }} >Rest</h1>
            {nextWorkout && (
              <>
                <h3 style={{ fontSize: '1.7rem', marginTop: "-3rem" }} >Next: {nextWorkout.name}</h3>
                {/* <VideoGif {...nextWorkout} /> */}
              </>
            )}
          </>
        ) : (
          <>
          
          <VideoGif className="image_gif" {...currentWorkout} />
          <h2 className='workout_text'>{currentWorkout.name}</h2>
        </>
        )}

          
        </div>
      
      


      <div className="timer_containter">
        <video
          key={isRest ? "rest" : "workout"}
          // className={"timer-video workout"}
          ref={videoRef}
          muted
          autoPlay
          playsInline
          src={isRest ? "/videos/10-sec.mp4" : "/videos/20-sec.mp4"}
          style={{
            width: "400px",
            height: "150px"
          }}
        />
      </div>
    </div>
  );
}
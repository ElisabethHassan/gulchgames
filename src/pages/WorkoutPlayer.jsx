import { useEffect, useState, useRef } from 'react';
import VideoGif from "../components/VideoGif"
import Confetti from 'react-confetti';
import ConfettiExplosion from 'react-confetti-explosion';
// import { useWindowSize } from 'react-use';
import '../styles/Home.css'

// const { width, height } = useWindowSize();
const width = 1080;
const height = 1080;

const workouts = [
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

const workoutMessages = [
  "You're doing great!",
  "Keep pushing!",
  "Stay strong!",
  "You got this!",
  "Nice form!",
  "Almost there!"
];

const restMessages = [
  "Nice work! Take a breather.",
  "Grab some water!",
  "Rest up – next one’s coming!",
  "Shake it out!",
  "You're crushing it!"
];


export default function WorkoutPlayer() {
  const [index, setIndex] = useState(0);
  const [isRest, setIsRest] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [remainingTime, setRemainingTime] = useState(20000);
  const [message, setMessage] = useState("");


  const startTimestampRef = useRef(null);
  const remainingTimeRef = useRef(remainingTime);
  const timerRef = useRef(null);
  const videoRef = useRef();

  const duration = isRest ? 10000 : 20000;

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
        if (index + 1 < workouts.length) {
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
        
        <div className='confetti_explosion'>
          <ConfettiExplosion
            // className='confetti_explosion'
            width={width}
            height={height}
            duration={7200}
            colors={['#E46B91', '#FBAF63', '#F2655B', '#5D80C0']}
            force={0.8}
            
          />
          </div>
        {/* <ConfettiExplosion 
        width={width}
        height={height}
        duration={7200}
        colors={['#E46B91', '#FBAF63', '#F2655B', '#5D80C0']}
        force={0.8}
        /> */}
        <h1> You crushed it!</h1>
        <h3>Take some time to stretch and cool down</h3>
      </div>
    );
  }

  const currentWorkout = workouts[index];
  const nextWorkout = workouts[index + 1];

  return (
    <div className="workout-container">
        {/* <button onClick={togglePause} style={{ margin: '1rem', padding: '0.5rem 1rem' }}>
        {isPaused ? "Resume" : "Pause"}
      </button> */}

        <div className="workoutimage">
          {isRest ? (
          <>
            <h2>Rest</h2>
            {nextWorkout && (
              <>
                <p>Next: {nextWorkout.name}</p>
                <VideoGif {...nextWorkout} />
              </>
            )}
          </>
        ) : (
          <>
          <h2>{currentWorkout.name}</h2>
          <VideoGif {...currentWorkout} />
        </>
        )}

          <div className="encouragement">
            <h2 style={{ fontSize: '2.3rem', marginTop: '1rem', fontWeight: 'bold' }}>{message}</h2>
          </div>
        </div>
      
      


      <div className="timer_containter">
        <video
          key={isRest ? "rest" : "workout"}
          ref={videoRef}
          width="400"
          height="150"
          muted
          autoPlay
          playsInline
          src={isRest ? "/videos/10-sec.mp4" : "/videos/20-sec.mp4"}
        />
      </div>
    </div>
  );
}
import { useEffect, useState, useRef } from 'react';
import VideoGif from "../components/VideoGif"
import '../styles/Home.css'


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

export default function WorkoutPlayer() {
  const [index, setIndex] = useState(0);
  const [isRest, setIsRest] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [remainingTime, setRemainingTime] = useState(20000);

  const startTimestampRef = useRef(null);
  const timerRef = useRef(null);
  const videoRef = useRef();

  const duration = isRest ? 10000 : 20000;

  useEffect(() => {
    if (isFinished || isPaused) return;

    // Start time tracking
    startTimestampRef.current = Date.now();

    // Reset and play the correct timer video
    if (videoRef.current) {
      videoRef.current.currentTime = (duration - remainingTime) / 1000;
      videoRef.current.play();
    }
    // if (videoRef.current) {
    //   videoRef.current.load(); // Reload the video src
    //   videoRef.current.play();
    // }

  //   const timer = setTimeout(() => {
  //     if (isRest) {
  //       if (index + 1 < workouts.length) {
  //         setIndex(index + 1);
  //         setIsRest(false);
  //       } else {
  //         setIsFinished(true);
  //       }
  //     } else {
  //       setIsRest(true);
  //     }
  //   }, isRest ? 10000 : 20000); // 10s rest or 20s workout

  //   return () => clearTimeout(timer);
  // }, [index, isRest, isPaused, isFinished]);


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
  }, remainingTime);

  return () => clearTimeout(timerRef.current);
}, [index, isRest, isPaused, remainingTime, isFinished]);

  // const togglePause = () => {
  //   setIsPaused((prev) => !prev);

  //   if (!isPaused) {
  //     clearTimeout(timerRef.current);
  //     if (videoRef.current) videoRef.current.pause();
  //   } else {
  //     // resume manually by changing isPaused, which triggers useEffect again
  //   }
  // };

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
        <h1>🎉 Workout Complete! 🎉</h1>

        {/* Optional: add confetti animation */}
        {/* <video
          ref={videoRef}
          width="400"
          height="150"
          muted
          autoPlay
          playsInline
          src="/videos/confetti.mp4"
        /> */}
      </div>
    );
  }

  const currentWorkout = workouts[index];
  const nextWorkout = workouts[index + 1];

  return (
    <div className="workout-container">
        <button onClick={togglePause} style={{ margin: '1rem', padding: '0.5rem 1rem' }}>
        {isPaused ? "Resume" : "Pause"}
      </button>

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
        <VideoGif {...currentWorkout} />
      )}
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
        {/* <video
          key={isRest ? "rest" : "workout"} // forces reload on switch
          ref={videoRef}
          width="400"
          height="150"
          muted
          autoPlay
          playsInline
          src={isRest ? "/videos/10-sec.mp4" : "/videos/20-sec.mp4"}
        /> */}
      </div>
    </div>
  );
}
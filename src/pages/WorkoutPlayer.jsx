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
  const videoRef = useRef();


  useEffect(() => {
    if (isFinished) return;

    // Reset and play the correct timer video
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video src
      videoRef.current.play();
    }

    const timer = setTimeout(() => {
      if (isRest) {
        if (index + 1 < workouts.length) {
          setIndex(index + 1);
          setIsRest(false);
        } else {
          setIsFinished(true);
        }
      } else {
        setIsRest(true);
      }
    }, isRest ? 10000 : 20000); // 10s rest or 20s workout

    return () => clearTimeout(timer);
  }, [index, isRest, isFinished]);

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

  return (
    <div className="workout-container">
        <div className="workoutimage">
          {isRest ? (
          <>
            <h2>Rest</h2>
            <p>Next up: {workouts[index + 1]?.name || "Done!"}</p>
            {workouts[index + 1] && <VideoGif {...workouts[index + 1]} />}
            {/* {workouts[index + 1] && <img src={workouts[index + 1].gif} alt="Next Exercise" />} */}
          </>
        ) : (
          <>
          <VideoGif {...workouts[index]} />
            {/* <h2>{workouts[index].name}</h2>
            <img src={workouts[index].gif} alt={workouts[index].name} /> */}
          </>
        )}
        </div>
      
      


      <div className="timer_containter">
        <video
          key={isRest ? "rest" : "workout"} // forces reload on switch
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

import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import WorkoutCard from "../components/WorkoutCard";
import '../styles/WorkoutCard.css'

export default function Home() {
  const { updateForm } = useForm();
  const navigate = useNavigate();

  const selectWorkout = (workoutType) => {
    updateForm({ workoutType });
    navigate("/participants"); // Navigate to # of particpants selection page
  };

  return (
    <>
      <div className="wrapper">
        <h1>Welcome to Gulch Games! <br /> Choose a workout to get started.</h1>

        <div className="workouts">
          <button onClick={() => selectWorkout("Warmup")}>
            <WorkoutCard className="color1" timeButtonClass="color_second" time="20 Minutes" title="Warmup" description="Warm up for your workout with full body and cardio moves!" style={{ backgroundColor: 'blue' }}/>
          </button>

          <button onClick={() => selectWorkout("HIIT Tabata")}>
            <WorkoutCard time="20 Minutes" timeButtonClass="color_2" title="HIIT Tabata" description="Get your heart rate up with an interval routine and 1-minute finisher!" />
          </button>
        </div>

        <p>Not sure which one to choose? <a href="/previewWorkouts">Preview Workout Programs</a></p>
      </div>
    </>
  );
}

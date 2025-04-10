import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import WorkoutCard from "../components/WorkoutCard";
import '../styles/Home.css'

export default function ConfirmSelection() {
  const { formData } = useForm();
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/start"); // Move to the all set page
  };
  // const handleConfirm = () => {
  //   navigate("/video"); // Move to the video player page
  // };
  
  return (
    <div className="wrapper_confirm">
      <h1>Confirm Your Selection</h1>
      {/* <p>Review your choices before starting.</p> */}

      <p>You chose the <b>{formData.workoutType} workout</b> with <b>{formData.players}</b> particpants.</p>

      {/* Display the selected workout dynamically */}
      <div className="selected-workout">
        {formData.workoutType === "Warmup" ? (
          <WorkoutCard time="20 Minutes" title="Warmup" description="Warm up for your workout with full body and cardio moves!" timeButtonClass="color_second"/>
        ) : formData.workoutType === "HIIT Tabata" ? (
          <WorkoutCard time="20 Minutes" title="HIIT Tabata" description="Get your heart rate up with an interval routine and 1-minute finisher!" timeButtonClass="color_2"/>
        ) : (
          <p>No workout selected.</p>
        )}
      </div>

      {/* Display number of players */}
      {/* <p><strong>Players:</strong> {formData.players}</p> */}

      <button onClick={handleConfirm}>Looks good!</button>
      <p><b>There's a mistake? </b><a href="/">Go back</a></p>
      {/* <button onClick={() => navigate("/")}>Go Back</button> */}
    </div>
  );
}

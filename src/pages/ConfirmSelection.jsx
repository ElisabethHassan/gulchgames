import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import WorkoutCard from "../components/WorkoutCard";

export default function ConfirmSelection() {
  const { formData } = useForm();
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/video"); // Move to the video player page
  };

  return (
    <div className="wrapper">
      <h1>Confirm Your Selection</h1>
      <p>Review your choices before starting.</p>

      {/* Display the selected workout dynamically */}
      <div className="selected-workout">
        {formData.workoutType === "Warmup" ? (
          <WorkoutCard time="20 Minutes" title="Warmup" description="Warm up for your workout with full body and cardio moves!" />
        ) : formData.workoutType === "HIIT Tabata" ? (
          <WorkoutCard time="20 Minutes" title="HIIT Tabata" description="Get your heart rate up with an interval routine and 1-minute finisher!" />
        ) : (
          <p>No workout selected.</p>
        )}
      </div>

      {/* Display number of players */}
      <p><strong>Players:</strong> {formData.numPlayers}</p>

      <button onClick={handleConfirm}>Confirm & Start Workout</button>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

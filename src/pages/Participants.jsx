import { useForm } from "../context/FormContext";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'


const ParticipantsPage = () => {
  const { updateForm } = useForm();
  const navigate = useNavigate();

  const [count, setCount] = useState(1) 

  const increaseCount = () => setCount((prev) => prev + 1);
  
  const decreaseCount = () => {
    if (count > 1) setCount((prev) => prev - 1); // Prevent negative numbers
  };

  const selectPlayers = () => { 
    updateForm({ players: count });
    navigate("/confirm"); // Go confirm page
  };

  return (
    <div className="wrapper_participants">
      <h1>How Many Participants?</h1>

      <div className="container_particpants">
        <h1 className="count">{count}</h1>

        <div className="control-buttons">
          <button onClick={increaseCount}>+</button>
          <button onClick={decreaseCount}>-</button>
        </div>

      </div>

      <button onClick={selectPlayers}>Next</button>

    </div>
  );
};

export default ParticipantsPage;


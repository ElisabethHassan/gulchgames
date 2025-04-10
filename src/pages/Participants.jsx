import { useForm } from "../context/FormContext";
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'


const ParticipantsPage = () => {
  const { updateForm } = useForm();
  const navigate = useNavigate();
  const [count, setCount] = useState(1) 

  const slideshowWindowRef = useRef(null);

  useEffect(() => {
    slideshowWindowRef.current = window.open('', 'SlideshowWindow');
  }, []);

  useEffect(() => {
    if (slideshowWindowRef.current) {
      slideshowWindowRef.current.postMessage({ type: "updateParticipants", count }, "*");
    }
  }, [count]);

  // const increaseCount = () => setCount((prev) => prev + 1);
  const increaseCount = () => {
    if (count < 4) setCount((prev) => prev + 1);
  };
  
  const decreaseCount = () => {
    if (count > 1) setCount((prev) => prev - 1); // Prevent negative numbers
  };

  const selectPlayers = () => { 
    updateForm({ players: count });
    navigate("/confirm"); // Go confirm page

  };

//   const handleParticipantChange = (newCount) => {
//   setParticipants(newCount); // assuming you're storing the count

  
// };


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
      {/* <button onClick={() => {
        selectPlayers; //save number in form
        handleParticipantChange; //move to next slide on screen
      }}>Next</button> */}

    </div>
  );
};

export default ParticipantsPage;


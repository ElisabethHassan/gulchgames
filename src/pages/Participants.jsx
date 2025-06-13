import { useForm } from "../context/FormContext";
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'


const ParticipantsPage = () => {
  const { updateForm } = useForm();
  const navigate = useNavigate();
  const [count, setCount] = useState(1) 

  const slideshowWindowRef = useRef(null);

  // updates the slide based one the number of participants
  useEffect(() => {
    slideshowWindowRef.current = window.open('', 'SlideshowWindow');
  }, []);

  useEffect(() => {
    if (slideshowWindowRef.current) {
      slideshowWindowRef.current.postMessage({ type: "updateParticipants", count }, "*");
    }
  }, [count]);

  //increase up to 4 participants 
  // const increaseCount = () => setCount((prev) => prev + 1);
  const increaseCount = () => {
    if (count < 4) setCount((prev) => prev + 1);
  };
  
  //decrease down to 1 particpant
  const decreaseCount = () => {
    if (count > 1) setCount((prev) => prev - 1); // Prevent negative numbers
  };

  //saves information in form, navigate to next page
  const selectPlayers = () => { 
    updateForm({ players: count });
    navigate("/confirm"); // Go confirm page

  };


  return (
    <div className="wrapper_participants">
      <a className="back_button" href="/">Back</a>
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


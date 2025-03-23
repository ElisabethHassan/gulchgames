import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

const ParticipantsPage = () => {
  const { updateForm } = useForm();
  const navigate = useNavigate();

  const selectPlayers = (count) => {
    updateForm({ players: count });
    navigate("/confirm"); // Go confirm page
  };

  return (
    <div>
      <h1>How Many Players?</h1>
      <button onClick={() => selectPlayers(1)}>1 Player</button>
      <button onClick={() => selectPlayers(2)}>2 Players</button>
    </div>
  );
};

export default ParticipantsPage;


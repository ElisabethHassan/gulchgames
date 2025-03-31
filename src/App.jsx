import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import ConfirmSelection from "./pages/ConfirmSelection";
import Participants from "./pages/Participants";
import Done from './pages/Done';
import PreviewWorkout from './pages/PreviewWorkouts';
import VideoPlayer from "./pages/VideoPlayer"; // Import the Video Player page


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
// import MovementCard from './components/MovementCard'
// import WorkoutCard from './components/WorkoutCard'

function App() {
  // const [count, setCount] = useState(0)
  // const [select, setSelection] = useState (0)


  return (
    <>
  
  <FormProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/workout" element={<WorkoutPage />} /> */}
          <Route path="/participants" element={<Participants/>} />
          <Route path="/confirm" element={<ConfirmSelection />} />
          <Route path="/start" element={<Done/>} />
          <Route path="/previewWorkouts" element={<PreviewWorkout/>}/>
          <Route path="/video" element={<VideoPlayer />} />
          {/* <Route path="/final" element={<FinalVideoPage />} /> */}
        </Routes>
      </Router>
    </FormProvider>

    {/* <Home></Home> */}
    {/* <MovementCard workout="Run Laps" descriptor="Full Body"></MovementCard> */}

    {/* <div className='wrapper'>
      <h1>Welcome to Gulch Games! <br/> Choose a workout to get started.</h1>

      <div className='workouts'>
          <WorkoutCard time="20 Minutes" title="Warmup" description="Warm up for your workout with full body and cardio moviews!"></WorkoutCard>

          <WorkoutCard time="20 Minutes" title="HIIT Tabata" description="Get your heart rate up with an interval routine and 1 minute finisher!" />
        </div>

        <p>Not sure which one to choose? <a href="#">Preview Workout Programs</a></p>
      </div> */}
      
      



     

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { FormProvider } from "./context/FormContext";
import AppRoutes from './AppRoutes'; 
import './App.css'

function App() {
  return (
    <FormProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </FormProvider>
  );
}
// function App() {
//   return (
//     <FormProvider>
//       <Router>
//         <AppRoutes />
//       </Router>
//     </FormProvider>
//   );
// }

export default App;




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
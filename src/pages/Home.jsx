import WorkoutCard from '../components/WorkoutCard'
import '../styles/WorkoutCard.css'
import '../styles/Home.css'

export default function Home() {

    return (
        <>
         <div className='wrapper'>
               <h1>Welcome to Gulch Games! <br/> Choose a workout to get started.</h1>
         
               <div className='workouts'>
                   <WorkoutCard time="20 Minutes" title="Warmup" description="Warm up for your workout with full body and cardio moviews!"></WorkoutCard>
         
                   <WorkoutCard time="20 Minutes" title="HIIT Tabata" description="Get your heart rate up with an interval routine and 1 minute finisher!" />
                 </div>
         
                 <p>Not sure which one to choose? <a href="#">Preview Workout Programs</a></p>
               </div>


        </>
    )

}
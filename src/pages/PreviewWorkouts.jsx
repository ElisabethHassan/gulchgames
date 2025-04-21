import MovementCard from "../components/MovementCard"
import '../styles/WorkoutCard.css'


// page for user to preview workout before selecting
export default function PreviewWorkout() {

    return (
        <>
        <div className="wrapper_preview">
        <a className="back_button" href="/">Back</a>
            <h1>Preview Workouts</h1>
            <p>Both workouts are set to an interval of 20 seconds moving followed by 10 seconds resting. Both workouts also have a 1 minute finisher.</p>
        
            <div className="workout_preview">

            {/* <div className="title">
            </div> */}
            
                <h1>Warm Up</h1>
                <div className="warmup_preview scrolling">
                    <div className="warmup_images">
                        <MovementCard workout="Run Laps" descriptor="Full Body" back_color="back_color_2" color="color_second" gif="/gifs/Run.gif"> </MovementCard>
                        <MovementCard workout="Toe Touches" descriptor="Full Body" back_color="back_color_2" gif="/gifs/Toe-Touch.gif"> </MovementCard>
                        <MovementCard workout="Arm Circles" descriptor="Full Body" back_color="back_color_2" gif="/gifs/Arm-Circles.gif"> </MovementCard>
                        <MovementCard workout="Side Reaches" descriptor="Full Body" back_color="back_color_2" gif="/gifs/OH-Side-Reaches.gif"> </MovementCard>
                        <MovementCard workout="Frankensteins" descriptor="Full Body" back_color="back_color_2" gif="/gifs/Frankensteins.gif"> </MovementCard>
                        <MovementCard workout="Lunge + Twist" descriptor="Full Body" back_color="back_color_2" gif="/gifs/Side-Lunge.gif"> </MovementCard>
                        <MovementCard workout="Butt Kicks" descriptor="Full Body" back_color="back_color_2" gif="/gifs/Butt-Kicks.gif"> </MovementCard>
                        <MovementCard workout="Hip Openers" descriptor="Full Body" back_color="back_color_2" gif="/gifs/Open-the-Gate.gif"> </MovementCard>
                        <MovementCard workout="Hip Closers" descriptor="Full Body" back_color="back_color_2" gif="/gifs/Open-the-Gate.gif"> </MovementCard>
                        <MovementCard workout="Arm Swings" descriptor="Full Body" back_color="back_color_2" gif="/gifs/Arm-Swings.gif"> </MovementCard>
                        <MovementCard workout="Standing Twists" descriptor="Full Body" back_color="back_color_2" gif="/gifs/Standing-Twists.gif"> </MovementCard>
                        <MovementCard workout="Jumping Jacks" descriptor="Full Body" back_color="back_color_2" gif="/gifs/Jumping-Jack.gif"> </MovementCard>
                    </div>
                </div>

                <h1>HIIT Tabata</h1>
                <div className="hiit_tabata scrolling">
                <div className="warmup_images">
                    <MovementCard workout="Run Laps" descriptor="Full Body" back_color="back_color_1"  gif="/gifs/Run.gif"> </MovementCard>
                    <MovementCard workout="Air Squat" descriptor="Lower Body" back_color="back_color_1" gif="/gifs/Squat.gif"> </MovementCard>
                    <MovementCard workout="High Knees" descriptor="Full Body" back_color="back_color_1" gif="/gifs/High-Knees.gif"> </MovementCard>
                    <MovementCard workout="Jump Lunges" descriptor="Lower Body" back_color="back_color_1" gif="/gifs/Jump-Lunge.gif"> </MovementCard>
                    <MovementCard workout="Push Ups" descriptor="Core" back_color="back_color_1" gif="/gifs/Push-Up.gif"> </MovementCard>
                    <MovementCard workout="Jumping Jacks" descriptor="Full Body" back_color="back_color_1" gif="/gifs/Jumping-Jack.gif"> </MovementCard>
                    <MovementCard workout="Side Lunges" descriptor="Lower Body" back_color="back_color_1" gif="/gifs/Side-Lunge.gif"> </MovementCard>
                    <MovementCard workout="Burpees" descriptor="Full Body" back_color="back_color_1" gif="/gifs/Burpee.gif"> </MovementCard>
                    <MovementCard workout="Plank" descriptor="Core" back_color="back_color_1" gif="/gifs/plank.png"> </MovementCard>
                    <MovementCard workout="Punch Jacks" descriptor="Full Body" back_color="back_color_1" gif="/gifs/Punch-Jacks.gif"> </MovementCard>
                    <MovementCard workout="Burpees" descriptor="Full Body" back_color="back_color_1" gif="/gifs/Burpee.gif"> </MovementCard>
                    <MovementCard workout="Running" descriptor="Full Body" back_color="back_color_1" gif="/gifs/Run.gif"> </MovementCard>
                    </div>
                </div>
            </div>
        
        </div>
        

        </>
    )
}





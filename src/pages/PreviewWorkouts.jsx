import MovementCard from "../components/MovementCard"

export default function PreviewWorkout() {

    return (
        <>
        <div className="wrapper_preview">
        <a className="back_button" href="/">Back</a>
            <h1>Preview Workouts</h1>
            <p>Both workouts are set to an interval of 20 seconds moving followed by 10 seconds resting. Both workouts also have a 1 minute finisher.</p>
        
            <div className="workout_preview">

            
                <div className="warmup_preview">
                    <h1>Warm Up</h1>
                    <MovementCard workout="Run Laps" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Toe Touches" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Arm Circles" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Side Reaches" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Frankensteins" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Lunge + Twist" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Butt Kicks" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Hip Openers" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Hip Closers" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Arm Swings" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Standing Twists" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Jumping Jacks" descriptor="Full Body"> </MovementCard>

                </div>

                <div className="hiit_tabata">
                <h1>HIIT Tabata</h1>
                    <MovementCard workout="Run Laps" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Air Squat" descriptor="Lower Body"> </MovementCard>
                    <MovementCard workout="High Knees" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Jump Lunges" descriptor="Lower Body"> </MovementCard>
                    <MovementCard workout="Push Ups" descriptor="Core"> </MovementCard>
                    <MovementCard workout="Jumping Jacks" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Side Lunges" descriptor="Lower Body"> </MovementCard>
                    <MovementCard workout="Burpees" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Plank" descriptor="Core"> </MovementCard>
                    <MovementCard workout="Punch Jacks" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Burpees" descriptor="Full Body"> </MovementCard>
                    <MovementCard workout="Running" descriptor="Full Body"> </MovementCard>
                </div>
            </div>
        
        </div>
        

        </>
    )
}
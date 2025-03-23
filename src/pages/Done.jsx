
export default function ConfirmSelection() {

    return (
        <>
        
        <div className="wrapper">
            <h1>All set!</h1>
            <p>Your workout will begin in 20 seconds. Get to a starting bubble before the timer runs out.</p>

            <p>Need more time? Add 10 seconds</p>

            {/* TODO: fix this */}
            {/* <button onClick={handleConfirm}>Pause Workout</button> */}
            <button onClick={() => navigate("/")}>Exit Workout</button>
   
        
        </div>
        

        
        </>

    );


}
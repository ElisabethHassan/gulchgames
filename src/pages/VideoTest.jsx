import { useForm } from "../context/FormContext";
import VideoGif from "../components/VideoGif"
import '../styles/Home.css'
import { useState, useEffect } from "react";


export default function VideoTest() {
    // const { formData } = useForm();
    const [timeLeft, setTimeLeft] = useState(20);


    const workout_order = {
        // <VideoGif workout="Arm Circles" gif="/gifs/Arm-Circles.gif"> </VideoGif>
        // <VideoGif workout="Side Reaches" gif="/gifs/OH-Side-Reaches.gif"> </VideoGif>
        // <VideoGif workout="Frankensteins" gif="/gifs/Frankensteins.gif"> </VideoGif>
        // <VideoGif workout="Lunge + Twist" gif="/gifs/Side-Lunge.gif"> </VideoGif>
        // <VideoGif workout="Butt Kicks" gif="/gifs/Butt-Kicks.gif"> </VideoGif>
        // <VideoGif workout="Hip Openers" gif="/gifs/Open-the-Gate.gif"> </VideoGif>
        // <VideoGif workout="Hip Closers" gif="/gifs/Open-the-Gate.gif"> </VideoGif>
        // <VideoGif workout="Arm Swings" gif="/gifs/Arm-Swings.gif"> </VideoGif>
        // <VideoGif workout="Standing Twists" gif="/gifs/Standing-Twists.gif"> </VideoGif>
        // <VideoGif workout="Jumping Jacks" gif="/gifs/Jumping-Jack.gif"> </VideoGif> */}     
    }


    //logic for the videos playing and not playing
    useEffect(() => {
        if (timeLeft > 0) {
            //if time is there keep the current gif
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            //when the timer runs out play the rest of the video and start the 10 second timer
            //

            // Start videos when timer hits 0
        }
    }, [timeLeft]);

    return ( 

        <>
        <div className="wrapper_video">
            <div className="sec_1">

            </div>


            <div className="sec_main">
                {/* <VideoGif></VideoGif> */}
                <VideoGif workout="Run Laps" gif="/gifs/Run.gif"> </VideoGif>
                {/* <video autoPlay src="/videos/20-sec.mov"></video> */}
                {/* <VideoGif workout="Toe Touches"  gif="/gifs/Toe-Touch.gif"> </VideoGif>
                <VideoGif workout="Arm Circles" gif="/gifs/Arm-Circles.gif"> </VideoGif>
                <VideoGif workout="Side Reaches" gif="/gifs/OH-Side-Reaches.gif"> </VideoGif>
                <VideoGif workout="Frankensteins" gif="/gifs/Frankensteins.gif"> </VideoGif>
                <VideoGif workout="Lunge + Twist" gif="/gifs/Side-Lunge.gif"> </VideoGif>
                <VideoGif workout="Butt Kicks" gif="/gifs/Butt-Kicks.gif"> </VideoGif>
                <VideoGif workout="Hip Openers" gif="/gifs/Open-the-Gate.gif"> </VideoGif>
                <VideoGif workout="Hip Closers" gif="/gifs/Open-the-Gate.gif"> </VideoGif>
                <VideoGif workout="Arm Swings" gif="/gifs/Arm-Swings.gif"> </VideoGif>
                <VideoGif workout="Standing Twists" gif="/gifs/Standing-Twists.gif"> </VideoGif>
                <VideoGif workout="Jumping Jacks" gif="/gifs/Jumping-Jack.gif"> </VideoGif> */}
            </div>


            <div className="sec_timer">
                {/* <video autoplay muted src="/videos/20-sec.mp4"></video> */}
                <video autoplay muted>
                    <source src="/videos/20-sec.mp4" type="video/mp4"/>
                </video>
            </div>


        </div>
        </>

    )


}

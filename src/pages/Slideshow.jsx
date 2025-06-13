import { useEffect, useState } from "react";
import '../styles/Home.css'


const slides = {
    "/participants": "/slides/Wall-Participants-1.svg",
    "/workout": "/slides/Wall-1.png",
    "/confirm": "/slides/Wall-Begin.png",
    "/start": "/slides/Wall-Begin.png",
};

// how the AppRoutes.jsx knows to switch the slides and which slide to switch to for projector screen
export default function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState("/slides/Wall-1.png");

    useEffect(() => {
        const handleMessage = (event) => {
            console.log("Received message:", event.data);
            if (event.data.type === "updateSlide") {
                setCurrentSlide(slides[event.data.page] || "/slides/Wall-1.png");
            } else if (event.data.type === "updateParticipants") {
                const count = event.data.count;
                const participantSlide = `/slides/Wall-Participants-${(count)}.svg`;
                setCurrentSlide(participantSlide);
              } else if (event.data.type === "exitWorkout"){
                // navigate("/slideshow");
                setCurrentSlide("/slides/Wall-1.png")
              } else if (event.data.type === "startWorkout") {
                window.location.href = "/workoutplayer";
              }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return (
        <div className="slideshow">
            <img src={currentSlide} alt="Current Slide" />
        </div>
    );
}

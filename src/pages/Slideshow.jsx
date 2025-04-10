import { useEffect, useState } from "react";
import '../styles/Home.css'


const slides = {
    "/participants": "/slides/Wall-Participants-1.png",
    "/workout": "/slides/Wall-1.png",
    "/confirm": "/slides/Wall-Begin.png",
    "/start": "/slides/Wall-Start-Timer.png",
};

export default function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState("/slides/Wall-1.png");

    useEffect(() => {
        const handleMessage = (event) => {
            console.log("Received message:", event.data);
            if (event.data.type === "updateSlide") {
                setCurrentSlide(slides[event.data.page] || "/slides/Wall-1.png");
            } else if (event.data.type === "updateParticipants") {
                const count = event.data.count;
                const participantSlide = `/slides/Wall-Participants-${(count)}.png`;
                setCurrentSlide(participantSlide);
              } 
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return (
        <div className="slideshow">
            <img src={currentSlide} alt="Current Slide" style={{ width: "100vw", height: "100vh", objectFit: "cover" }} />
        </div>
    );
}


/* 


.slideshow img {
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
}

.slideshow img.loaded {
    opacity: 1;
}

in Slideshow.js


useEffect(() => {
    const handleMessage = (event) => {
        if (event.data.type === "updateSlide") {
            setCurrentSlide(slides[event.data.page] || "/slides/welcome_slide.png");

            // Fade-in effect
            setTimeout(() => {
                document.querySelector(".slideshow img").classList.add("loaded");
            }, 100);
        }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
}, []);




*/ 


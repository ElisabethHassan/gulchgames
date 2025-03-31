import { useSearchParams } from "react-router-dom";

const VideoPlayer = () => {
    const [searchParams] = useSearchParams();
    const videoSrc = searchParams.get("videoSrc"); // Get video URL
    const screenType = searchParams.get("screenType"); // wall or floor

    return (
        <div>
            <h1>Playing Video for {screenType} Projector</h1>
            {videoSrc ? (
                <video src={videoSrc} autoPlay controls style={{ width: "100%", height: "100vh" }} />
            ) : (
                <p>No video selected.</p>
            )}
        </div>
    );
};

export default VideoPlayer;





// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// export default function VideoPlayer() {
//     const location = useLocation();
//     const { videoSrc, screenType } = location.state || {}; // Get video details from navigation
//     const [isFullscreen, setIsFullscreen] = useState(false);

//     useEffect(() => {
//         if (!videoSrc) {
//             console.error("No video source provided");
//             return;
//         }

//         const video = document.getElementById("workout-video");

//         // Auto-play when video loads
//         if (video) {
//             video.play();
//         }

//         // Try to make it fullscreen on load
//         if (!isFullscreen && document.documentElement.requestFullscreen) {
//             document.documentElement.requestFullscreen();
//             setIsFullscreen(true);
//         }
//     }, [videoSrc, isFullscreen]);

//     return (
//         <div className="video-container">
//             <h1>{screenType === "wall" ? "Wall Projection" : "Floor Projection"}</h1>
//             <video id="workout-video" src={videoSrc} controls autoPlay />
//         </div>
//     );
// }

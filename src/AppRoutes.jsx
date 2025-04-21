import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Participants from './pages/Participants';
import ConfirmSelection from './pages/ConfirmSelection';
import Done from './pages/Done';
import PreviewWorkout from './pages/PreviewWorkouts';
import VideoPlayer from './pages/VideoPlayer';
import Slideshow from './pages/Slideshow';
import VideoTest from './pages/VideoTest';
import WorkoutPlayer from './pages/WorkoutPlayer';


export default function AppRoutes() {
  const location = useLocation();
  const [slideshowWindow, setSlideshowWindow] = useState(null);

  // logic for the slideshow window to appear for wall
  useEffect(() => {
    if (window.name === "SlideshowWindow") return;

    const newWindow = window.open(
      "/slideshow",
      "SlideshowWindow",
      "width=1920,height=1080,left=0,top=0"
    );
    setSlideshowWindow(newWindow);
  }, []);

  // logic for slideshow window to update the slideshow based on wear the user is
  useEffect(() => {
    if (slideshowWindow) {
      slideshowWindow.postMessage(
        { type: "updateSlide", page: location.pathname },
        "*"
      );
    }
  }, [location.pathname, slideshowWindow]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/participants" element={<Participants />} />
      <Route path="/confirm" element={<ConfirmSelection />} />
      <Route path="/start" element={<Done />} />
      <Route path="/previewWorkouts" element={<PreviewWorkout />} />
      <Route path="/video" element={<VideoPlayer />} />
      <Route path="/slideshow" element={<Slideshow />} />
      <Route path="/videotest" element={<VideoTest/>} />
      <Route path="/workoutplayer" element={<WorkoutPlayer/>} />

      

    </Routes>
  );
}

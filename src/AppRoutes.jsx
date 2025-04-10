import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Home from './pages/Home';
import Participants from './pages/Participants';
import ConfirmSelection from './pages/ConfirmSelection';
import Done from './pages/Done';
import PreviewWorkout from './pages/PreviewWorkouts';
import VideoPlayer from './pages/VideoPlayer';
import Slideshow from './pages/Slideshow';


export default function AppRoutes() {
  const location = useLocation();
  const slideshowWindowRef = useRef(null);
  // const [slideshowWindow, setSlideshowWindow] = useState(null);

  useEffect(() => {
    // Only open the slideshow window once
    if (!slideshowWindowRef.current || slideshowWindowRef.current.closed) {
      slideshowWindowRef.current = window.open(
        "/slideshow",
        "SlideshowWindow",
        "width=1920,height=1080,left=0,top=0"
      );
    }
  }, []); // Only runs once

  useEffect(() => {
    if (slideshowWindowRef.current) {
      slideshowWindowRef.current.postMessage(
        { type: "updateSlide", page: location.pathname },
        "*"
      );
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/participants" element={<Participants />} />
      <Route path="/confirm" element={<ConfirmSelection />} />
      <Route path="/start" element={<Done />} />
      <Route path="/previewWorkouts" element={<PreviewWorkout />} />
      <Route path="/video" element={<VideoPlayer />} />
      <Route path="/slideshow" element={<Slideshow />} />

    </Routes>
  );
}

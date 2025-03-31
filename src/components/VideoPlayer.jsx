const VideoPlayer = ({ frontVideo, topDownVideo }) => {
    return (
      <div style={{ display: "flex" }}>
        <video src={frontVideo} autoPlay loop muted width="50%" />
        <video src={topDownVideo} autoPlay loop muted width="50%" />
      </div>
    );
  };
  
  export default VideoPlayer;
  
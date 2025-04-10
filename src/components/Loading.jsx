import '../styles/Home.css'

export default function Loading() {
    return (
        <div className="loading-overlay">
            <video
            className="logo-loader"
            src="/assets/logo-animation.mp4"
            autoPlay
            loop
            // muted
            // playsInline
        />
            {/* <img src="/path-to-your-logo.gif" alt="Loading..." className="logo-loader" /> */}
      </div>
    );
  }



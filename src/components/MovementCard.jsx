import '../styles/Home.css'

// card component for the preview workout page
export default function MovementCard({workout, descriptor, back_color, gif, color}){
    return (
        <div className={`previewcard ${back_color}`}>
            <div className="groupText">
                <h3>{workout}</h3>
                <p>{descriptor}</p>
            </div>
            
            <div className={`gif ${color}`}>
                <img src={gif} alt="workout preview gif" />
            </div>

            
     </div>
    );
}


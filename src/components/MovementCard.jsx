import '../styles/Home.css'

// card component for the preview workout page
export default function MovementCard({workout, descriptor, back_color, gif}){
    return (
        <div className={`previewcard ${back_color}`}>
            <div className="gif">
                <img src={gif} alt="workout preview gif" />
            </div>

            <div className="groupText">
                <h3>{workout}</h3>
                <p>{descriptor}</p>
            </div>
            
     </div>
    );
}


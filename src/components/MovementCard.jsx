import '../styles/Home.css'

export default function MovementCard({workout, descriptor, back_color}){
    return (
        <div className={`previewcard ${back_color}`}>
            <div className="gif">
                <img src="#" alt="" />
            </div>

            <div className="groupText">
                <h3>{workout}</h3>
                <p>{descriptor}</p>
            </div>
            
     </div>
    );
}


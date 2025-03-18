import '../styles/Home.css'

export default function MovementCard({workout, descriptor}){
    return (
        <div className="previewcard">
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


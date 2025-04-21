


export default function VideoGif({workout, gif}){

    return (
        <div className="wrapper_gif">
            <img id="exercise_gif" src={gif} alt="exercise gif" />
            <h1 id="exercise_title">{workout}</h1>
        </div>
    );

}